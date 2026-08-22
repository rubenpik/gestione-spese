PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS cloud_archives (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  recovery_code_hash TEXT NOT NULL UNIQUE,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS cloud_devices (
  id TEXT PRIMARY KEY,
  archive_id TEXT NOT NULL,
  token_hash TEXT NOT NULL UNIQUE,
  created_at TEXT NOT NULL,
  revoked_at TEXT,
  FOREIGN KEY (archive_id) REFERENCES cloud_archives(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_cloud_devices_archive ON cloud_devices(archive_id);

CREATE TABLE IF NOT EXISTS cloud_snapshots (
  archive_id TEXT PRIMARY KEY,
  revision INTEGER NOT NULL DEFAULT 0,
  payload TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY (archive_id) REFERENCES cloud_archives(id) ON DELETE CASCADE
);
