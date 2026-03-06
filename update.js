module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "git pull"
    }
  }, {
    method: "shell.run",
    params: {
      path: "app",
      message: "git pull"
    }
  }, {
    method: "shell.run",
    params: {
      venv: "venv",
      path: "app",
      message: "uv pip install requirements-global.txt --force-reinstall"
    }
  }, {
    when: "gpu === 'nvidia'",
    method: "shell.run",
    params: {
      venv: "venv",
      path: "app",
      message: "uv pip install requirements-cuda.txt --force-reinstall --no-deps"
    },
      "next": null
  }, {
    when: "gpu === 'amd'",
    method: "shell.run",
    params: {
      venv: "venv",
      path: "app",
      message: "uv pip install requirements-rocm.txt --force-reinstall --no-deps"
    }
  }]
}
