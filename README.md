# Tic-Tac-Toe Web Game

This is a basic Tic-Tac-Toe game implemented using the Flask web framework in Python. You can play the classic game against another human player directly in your web browser.

## Table of Contents

* [Features](#features)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
* [Running the Application](#running-the-application)
* [Basic Controls](#basic-controls)
* [License](#license)

## Features

* Simple and intuitive web interface for playing Tic-Tac-Toe.
* Two-player game on the same device/browser.
* Clear indication of the current player's turn.
* Detects and announces the winner or a draw.

## Getting Started

Follow these steps to get the game up and running on your local machine.

### Prerequisites

* **Python 3.6+** installed on your system.
* **pip** (Python package installer) should be installed with your Python installation.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Chetan-Singh04/Tic-Tac-Toe.git](https://github.com/Chetan-Singh04/Tic-Tac-Toe.git)
    cd Tic-Tac-Toe
    ```

2.  **Initialize a virtual environment:**
    ```bash
    python -m venv venv
    ```

3.  **Activate the virtual environment:**
    * **On Windows:**
        ```bash
        venv\Scripts\activate
        ```
    * **On macOS and Linux:**
        ```bash
        source venv/bin/activate
        ```

4.  **Install the Flask framework:**
    ```bash
    pip install flask
    ```

## Running the Application

Once you have installed the necessary dependencies, you can run the Tic-Tac-Toe game using the following command:

```bash
python app.py
