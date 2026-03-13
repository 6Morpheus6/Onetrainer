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
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "mkdir checkpoints",
          "mkdir base_models",
          "mkdir gguf_models",
          "mkdir models"
        ]
      }
    },
    {
      "method": "fs.link",
      "params": {
        "drive": {
          "checkpoints": "app/checkpoints",
          "diffusers": "app/base_models",
          "unet": "app/gguf_models",
          "loras": "app/models"
        },
        "peers": [
          "https://github.com/cocktailpeanut/fluxgym.git",
          "https://github.com/cocktailpeanutlabs/automatic1111.git",
          "https://github.com/cocktailpeanutlabs/fooocus.git",
          "https://github.com/pinokiofactory/comfy.git",
          "https://github.com/pinokiofactory/stable-diffusion-webui-forge.git",
          "https://github.com/pinokiofactory/MagicQuill.git",
          "https://github.com/6Morpheus6/forge-neo.git"
        ]
      }
    },
  ]
}
