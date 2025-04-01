defmodule Backend.Accounts.Role do
  use Ecto.Schema
  import Ecto.Changeset

  schema "roles" do
    field :name, :string

    has_many :users, Backend.Accounts.User

    timestamps()
  end

  def changeset(role, attrs) do
    role
    |> cast(attrs, [:name])
    |> validate_required([:name])
    |> unique_constraint(:name)
  end
end
