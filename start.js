module.exports = {
  requires: {
    bundle: "ai",
  },
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        venv: "venv",
        env: { },
        path: "app",
        message: [
          "{{platform === 'win32' ? 'start-ui.bat' : 'bash start-ui.sh'}}",
        ],
        on: [{
          "event": "/http:\/\/\\S+/",
          "done": true
        }, {
          "event": "/errno/i",
          "break": false
        }, {
          "event": "/error:/i",
          "break": false
        }]
      }
    },
    {
      method: "local.set",
      params: {
        url: "{{input.event[0]}}"
      }
    }
  ]
}
