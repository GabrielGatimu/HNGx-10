const express = require("express");
const moment = require("moment-timezone");

const app = express();

app.set("json spaces", 2);

app.get("/api", (req, res) => {
  const { slack_name, track } = req.query;

  const currentDay = moment().tz("UTC").format("dddd");
  const utcTime = moment().tz("UTC").format();

  const githubFileUrl =
    "https://github.com/GabrielGatimu/HNGx-10/blob/main/app.js";
  const githubRepoUrl = "https://github.com/gabrielgatimu/HNGx-10";

  const response = {
    slack_name: slack_name,
    current_day: currentDay,
    utc_time: utcTime,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  };

  res.json(response);
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Running Server on port ${port} `));
