const path = require('path')
module.exports = {
  version: "5.0",
  menu: async (kernel, info) => {
    let installed = info.exists("app/venv")
    let running = {
      install: info.running("install.js"),
      start: info.running("start.js"),
      update: info.running("update.js"),
      reset: info.running("reset.js"),
      link: info.running("link.js")
    }
    
    let downloading = [
      "download-zimage.json",
      "download-qwen-image.json",
      "download-qwen-image-gguf-q2-k.json",
      "download-chroma.json",
      "download-chroma-gguf-q5-0.json",
      "download-flux-dev.json",
      "download-flux-dev-gguf-q4-0.json",
      "download-flux-fill.json",
      "download-flux2-dev.json",
      "download-flux2-dev-gguf-q2-k.json",
      "download-flux2-klein-4b.json",
      "download-flux2-klein-9b.json",
    ]
    if (running.install) {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Installing",
        href: "install.js",
      }]
    } else if (installed) {
      if (running.start) {
        let local = info.local("start.js")
        if (local && local.url) {
          return [{
            default: true,
            icon: "fa-solid fa-rocket",
            text: "Open Web UI",
            href: local.url,
          }, {
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: "start.js",
          }]
        } else {
          return [{
            default: true,
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: "start.js",
          }]
        }
      } else if (running.update) {
        return [{
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Updating",
          href: "update.js",
        }]
      } else if (running.reset) {
        return [{
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Resetting",
          href: "reset.js",
        }]
      } else if (running.link) {
        return [{
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Deduplicating",
          href: "link.js",
        }]
      } else {
        return [{
          default: true,
          icon: "fa-solid fa-power-off",
          text: "Start",
          href: "start.js",
        }, {
          icon: "fa-solid fa-plug",
          text: "Update",
          href: "update.js",
        }, {
          icon: "fa-solid fa-plug",
          text: "Install",
          href: "install.js",
        },{
          icon: "fa-solid fa-download",
          text: "Download Models",
          menu: [
            { text: "Z-Image (21 GB)", icon: "fa-solid fa-download", href: "download-zimage.json", mode: "refresh" },
            { text: "Qwen Image (58 GB)", icon: "fa-solid fa-download", href: "download-qwen-image.json", mode: "refresh" },
            { text: "Qwen Image gguf q2_k (7 GB)", icon: "fa-solid fa-download", href: "download-qwen-image-gguf-q2-k.json", mode: "refresh" },
            { text: "Chroma 1 HD (28 GB)", icon: "fa-solid fa-download", href: "download-chroma.json", mode: "refresh" },
            { text: "Chroma 1 HD gguf q5_0 (6.5GB)", icon: "fa-solid fa-download", href: "download-chroma-gguf-q5-0.json", mode: "refresh" },
            { text: "Flux 1 Dev (34 GB)", icon: "fa-solid fa-download", href: "download-flux-dev.json", mode: "refresh" },
            { text: "Flux 1 Dev gguf q4_0 (6.7 GB)", icon: "fa-solid fa-download", href: "download-flux-dev-gguf-q4-0.json", mode: "refresh" },
            { text: "Flux 1 Fill Dev (35 GB)", icon: "fa-solid fa-download", href: "download-flux-fill.json", mode: "refresh" },
            { text: "Flux 2 Dev (113 GB)", icon: "fa-solid fa-download", href: "download-flux2-dev.json", mode: "refresh" },
            { text: "Flux 2 Dev gguf q2_k (13 GB)", icon: "fa-solid fa-download", href: "download-flux2-dev-gguf-q2-k.json", mode: "refresh" },
            { text: "Flux 2 Klein 4B (16 GB)", icon: "fa-solid fa-download", href: "download-flux2-klein-4b.json", mode: "refresh" },
            { text: "Flux 2 Klein 9B (35 GB)", icon: "fa-solid fa-download", href: "download-flux2-klein-9b.json", mode: "refresh" }
          ]
        }, {
          icon: "fa-solid fa-file-zipper",
          text: "<div><strong>Save Disk Space</strong><div>Deduplicates redundant library files</div></div>",
          href: "link.js",
        }, {
          icon: "fa-regular fa-circle-xmark",
          text: "<div><strong>Reset</strong><div>Revert to pre-install state</div></div>",
          href: "reset.js",
          confirm: "Are you sure you wish to reset the app?"

        }]
      }
    } else {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Install",
        href: "install.js",
      }]
    }
  }
}
