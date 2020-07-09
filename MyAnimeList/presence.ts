const presence = new Presence({
  clientId: "730095112826388521"
})

presence.on("UpdateData", () => {
  const presenceData: PresenceData = {
    largeImageKey: "logo",
  };

  const page = document.location.pathname;
  if (page.startsWith("/anime/")){
    presenceData.details = "Looking at anime:";
    presenceData.state = document.querySelector(".h1-title").textContent;
  }
  else if (page.startsWith("/register")){
    presenceData.details = "Viewing Page:";
    presenceData.state = "Creating an account";
  }
  else if (page.startsWith("/login")){
    presenceData.details = "Viewing Page:";
    presenceData.state = "Signing In";
  }
  else if (page.startsWith("/users")){
    presenceData.details = "Viewing Page:"
    presenceData.state = "Looking for user"
  }
  else if (page.startsWith("/profile/")){
    presenceData.details = "Viewing Profile:"
    presenceData.state = document.querySelector(".di-ib.po-r").textContent;
  }
  else if (page.startsWith("/store/")){
    presenceData.details = "Viewing Store:"
    presenceData.state = document.querySelector(".comic-detail-title").textContent;
  }
  else if (page.startsWith("/manga/")){
    presenceData.details = "Viewing Manga:"
    presenceData.state = document.querySelector(".h1-title").textContent;
  }
  else if (page.startsWith("/character/")){
      presenceData.details = "Viewing character:";
      presenceData.state = document.querySelector(".h1.edit-info").textContent;
    }
  presence.setActivity(presenceData);
});