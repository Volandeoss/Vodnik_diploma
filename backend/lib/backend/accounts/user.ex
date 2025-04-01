defmodule Backend.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :name, :string
    field :email, :string
    field :password, :string, virtual: true
    field :password_hash, :string

    belongs_to :role, Backend.Accounts.Role
    timestamps(type: :utc_datetime)
  end

  def changeset(user, attrs) do
    user
    |> cast(attrs, [:name, :email, :password])
    |> validate_required([:name, :email, :password])
    |> unique_constraint(:email)
    |> hash_password()
  end

  defp hash_password(changeset) do
    if password = get_change(changeset, :password) do
      put_change(changeset, :password_hash, Argon2.hash_pwd_salt(password))
    else
      changeset
    end
  end
end
