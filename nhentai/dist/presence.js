const presence = new Presence({
    clientId: "730767772958720000"
});
presence.on("UpdateData", () => {
    const presenceData = {
        largeImageKey: "hentai",
    };
    const page = document.location.pathname;
    if (page.startsWith("/g/")) {
        presenceData.details = "Viewing Hentai:";
        presenceData.state = document.querySelector(".title").textContent;
    }
    else if (page.startsWith("/search")) {
        presenceData.details = "Viewing Page:";
        presenceData.state = "Searching for hentai 😳";
    }
    else if (page.startsWith("/characters/")) {
        presenceData.details = "Character:";
        presenceData.state = "Searching for character";
    }
    else if (page.startsWith("/character/")) {
        presenceData.details = "Viewing Character:";
        presenceData.state = document.querySelector(".name").textContent;
    }
    else if (page.startsWith("/artists/")) {
        presenceData.details = "Artists";
        presenceData.state = "Searching for an artist";
    }
    else if (page.startsWith("/artist/")) {
        presenceData.details = "Artist";
        presenceData.state = document.querySelector(".name").textContent;
    }
    else if (page.startsWith("/parodies/")) {
        presenceData.details = "Parodies:";
        presenceData.state = "Searching for parodies";
    }
    else if (page.startsWith("/parody/")) {
        presenceData.details = "Parodie:";
        presenceData.state = document.querySelector(".name").textContent;
    }
    else if (page.startsWith("/groups/")) {
        presenceData.details = "Groups:";
        presenceData.state = "Searching for group(s)";
    }
    else if (page.startsWith("/group/")) {
        presenceData.details = "Group:";
        presenceData.state = document.querySelector(".name").textContent;
    }
    else if (page.startsWith("/tags")) {
        presenceData.details = "Tags";
        presenceData.state = "Viewing Tags";
    }
    else if (page.startsWith("/tag")) {
        presenceData.details = "Tag:";
        presenceData.state = document.querySelector(".name").textContent;
    }
    else if (page.startsWith("/info")) {
        presenceData.details = "Info:";
        presenceData.state = "Reading nhentai info";
    }
    else if (page.startsWith("/login/")) {
        presenceData.details = "Login:";
        presenceData.state = "Signing in 😳";
    }
    else if (page.startsWith("/register/")) {
        presenceData.details = "Register:";
        presenceData.state = "Creating an account 😳";
    }
    presence.setActivity(presenceData);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wcmVzZW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQztJQUM1QixRQUFRLEVBQUcsb0JBQW9CO0NBQ2hDLENBQUMsQ0FBQTtBQUVGLFFBQVEsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTtJQUM3QixNQUFNLFlBQVksR0FBaUI7UUFDakMsYUFBYSxFQUFFLFFBQVE7S0FDeEIsQ0FBQztJQUVGLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO0lBQ3hDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBQztRQUN6QixZQUFZLENBQUMsT0FBTyxHQUFHLGlCQUFpQixDQUFDO1FBQ3pDLFlBQVksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUM7S0FDbkU7U0FDSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUM7UUFDbEMsWUFBWSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7UUFDdkMsWUFBWSxDQUFDLEtBQUssR0FBRyx5QkFBeUIsQ0FBQztLQUNoRDtTQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsRUFBQztRQUN2QyxZQUFZLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQztRQUNwQyxZQUFZLENBQUMsS0FBSyxHQUFHLHlCQUF5QixDQUFDO0tBQ2hEO1NBQ0ksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFDO1FBQ3RDLFlBQVksQ0FBQyxPQUFPLEdBQUcsb0JBQW9CLENBQUM7UUFDNUMsWUFBWSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQztLQUNsRTtTQUNJ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