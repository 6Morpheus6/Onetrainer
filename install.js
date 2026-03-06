module.exports = {
  requires: {
    bundle: "ai",
  },
  run: [
    {
      method: "shell.run",
      params: {
        message: "git clone https://github.com/Nerogar/OneTrainer app"
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "venv",
        path: "app",
        message: [
          "pip install -r requirements-global.txt"
        ]
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "venv",
          path: "app"
        }
      }
    },
    {
      when: "{{which('apt')}}",
      method: "shell.run",
      params: {
        sudo: true,
        message: "apt-get install libgl1"
      },
      "next": null
    },
    {
      when: "{{which('pacman')}}",
      method: "shell.run",
      params: {
        sudo: true,
        message: "pacman -S tk"
      },
      "next": null
    },
    {
      when: "{{which('apk')}}",
      method: "shell.run",
      params: {
        message: "apk add py3-tk"
      }
    }
  ]
}
