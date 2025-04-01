defmodule Backend.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :name, :string
      add :email, :string
      add :password_hash, :string
      add :role_id, references(:roles, on_delete: :delete_all)

      timestamps(type: :utc_datetime)
    end
  end
end
