const presence = new Presence({
  clientId: "730385907147997254"
});

const timeStamp = Math.floor(Date.now() / 1000);

presence.on("UpdateData", () => {
  const presenceData: PresenceData = {
    largeImageKey: "code",
    startTimestamp: timeStamp
  };
  const page = document.location.pathname;
  if (page.startsWith("/learn")){
    presenceData.details = "Choosing:";
    presenceData.state = "Currently checking stats/codes";
  }
  else if (page.startsWith("/welcome/")){
    presenceData.details = "Viewing Page:";
    presenceData.state = "Deciding what to learn!";
  }
  else if (page.startsWith("/courses/")){
    presenceData.details = "Learning:";
    presenceData.state = "Reading Article or Taking Quiz/Lesson"
  }
  else if (page.startsWith("/profiles/")){
    presenceData.details = "Checking Profile:",
    presenceData.state = document.querySelector(".label__2YO_cDf1Lu9PDDsn62kz6L").textContent;
  }
  else if (page.startsWith("/search")){
    presenceData.details = "Searching:"
    presenceData.state = "Looking for something 🤔"
  }
  presence.setActivity(presenceData);
});