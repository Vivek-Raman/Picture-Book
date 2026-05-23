#!/usr/bin/env python3

from __future__ import annotations

import shutil
import subprocess
import sys
from pathlib import Path


def main() -> None:
    repo_root, cli_dir, cli_entry, binaries_dir = resolve_paths()
    binary_name = "picture-book-cli"
    binary_filename = get_binary_filename(binary_name)

    build_cli_binary(cli_dir, cli_entry, binary_name)
    copy_binary(cli_dir, binaries_dir, binary_filename)
    build_electron_app(repo_root)


def resolve_paths() -> tuple[Path, Path, Path, Path]:
    repo_root = Path(__file__).resolve().parent.parent
    cli_dir = repo_root / "cli"
    cli_entry = cli_dir / "main.py"
    binaries_dir = repo_root / "src" / "resources" / "binaries"

    if not cli_entry.exists():
        raise FileNotFoundError(f"CLI entrypoint not found: {cli_entry}")

    return repo_root, cli_dir, cli_entry, binaries_dir


def get_binary_filename(binary_name: str) -> str:
    return f"{binary_name}.exe" if sys.platform == "win32" else binary_name


def build_cli_binary(cli_dir: Path, cli_entry: Path, binary_name: str) -> None:
    run_command(
        [
            "uv",
            "run",
            "--directory",
            str(cli_dir),
            "pyinstaller",
            "--clean",
            "--noconfirm",
            "--onefile",
            "--name",
            binary_name,
            str(cli_entry.name),
        ],
        cwd=cli_dir,
    )


def copy_binary(cli_dir: Path, binaries_dir: Path, binary_filename: str) -> None:
    built_binary = cli_dir / "dist" / binary_filename
    if not built_binary.exists():
        raise FileNotFoundError(f"Built binary not found: {built_binary}")

    binaries_dir.mkdir(parents=True, exist_ok=True)
    destination_binary = binaries_dir / binary_filename
    shutil.copy2(built_binary, destination_binary)
    print(f"Copied binary to {destination_binary}")


def build_electron_app(repo_root: Path) -> None:
    run_command(["npm", "run", "dist"], cwd=repo_root)


def run_command(command: list[str], cwd: Path) -> None:
    printable = " ".join(command)
    print(f"\n$ {printable} (cwd: {cwd})")
    subprocess.run(command, cwd=cwd, check=True)


if __name__ == "__main__":
    main()
