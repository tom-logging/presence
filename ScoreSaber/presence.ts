const presence = new Presence({
  clientId: "730725300111015976"
})

const timeStamp = Math.floor(Date.now() / 1000);

presence.on("UpdateData", () => {
  const presenceData: PresenceData = {
    largeImageKey: "saber",
    startTimestamp: timeStamp
  };

  const page = document.location.pathname;
  if (page.startsWith("/u/")){
    presenceData.details = "Viewing Profile:";
    presenceData.state = document.querySelector(".title.is-5").textContent;
  }
  else if (page.startsWith("/global")){
    presenceData.details = "Viewing Ranks:";
    presenceData.state = "Global Leaderboard";
  }
  else if (page.startsWith("/faq")){
    presenceData.details = "Viewing Page:"
    presenceData.state = "FAQ/External Links"
  }
  else if (page.startsWith("/leaderboard")){
    presenceData.details = "Viewing Song Leaderboard:"
    presenceData.state = document.querySelector(".title.is-5").textContent;
  }
  presence.setActivity(presenceData);
});