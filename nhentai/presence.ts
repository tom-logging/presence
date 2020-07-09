const presence = new Presence({
  clientId:  "730767772958720000"
})

presence.on("UpdateData", () => {
  const presenceData: PresenceData = {
    largeImageKey: "hentai",
  };

  const page = document.location.pathname;
  if (page.startsWith("/g/")){
    presenceData.details = "Viewing Hentai:";
    presenceData.state = document.querySelector(".title").textContent;
  }
  else if (page.startsWith("/search")){
    presenceData.details = "Viewing Page:";
    presenceData.state = "Searching for hentai 😳";
  }
  else if (page.startsWith("/characters/")){
    presenceData.details = "Character:";
    presenceData.state = "Searching for character";
  }
  else if (page.startsWith("/character/")){
    presenceData.details = "Viewing Character:";
    presenceData.state = document.querySelector(".name").textContent;
  }
  else if (page.startsWith("/artists/")){
    presenceData.details = "Artists";
    presenceData.state = "Searching for an artist";
  }
  else if (page.startsWith("/artist/")){
    presenceData.details = "Artist";
    presenceData.state = document.querySelector(".name").textContent;
  }
  else if (page.startsWith("/parodies/")){
    presenceData.details = "Parodies:";
    presenceData.state = "Searching for parodies";
  }
  else if (page.startsWith("/parody/")){
    presenceData.details = "Parodie:";
    presenceData.state = document.querySelector(".name").textContent;
  }
  else if (page.startsWith("/groups/")){
    presenceData.details = "Groups:";
    presenceData.state = "Searching for group(s)";
  }
  else if (page.startsWith("/group/")){
    presenceData.details = "Group:";
    presenceData.state = document.querySelector(".name").textContent;
  }
  else if (page.startsWith("/tags")){
    presenceData.details = "Tags";
    presenceData.state = "Viewing Tags";
  }
  else if (page.startsWith("/tag")){
    presenceData.details = "Tag:";
    presenceData.state = document.querySelector(".name").textContent;
  }
  else if (page.startsWith("/info")){
    presenceData.details = "Info:";
    presenceData.state = "Reading nhentai info";
  }
  else if (page.startsWith("/login/")){
    presenceData.details = "Login:";
    presenceData.state = "Signing in 😳";
  }
  else if (page.startsWith("/register/")){
    presenceData.details = "Register:";
    presenceData.state = "Creating an account 😳";
  }
  presence.setActivity(presenceData);
});