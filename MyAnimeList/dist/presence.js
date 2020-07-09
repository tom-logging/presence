const presence = new Presence({
    clientId: "730095112826388521"
});
const timeStamp = Math.floor(Date.now() / 1000);
presence.on("UpdateData", () => {
    const presenceData = {
        largeImageKey: "logo",
        startTimestamp: timeStamp
    };
    const page = document.location.pathname;
    if (page.startsWith("/anime/")) {
        presenceData.details = "Looking at anime:";
        presenceData.state = document.querySelector(".h1-title").textContent;
    }
    else if (page.startsWith("/register")) {
        presenceData.details = "Viewing Page:";
        presenceData.state = "Creating an account";
    }
    else if (page.startsWith("/login")) {
        presenceData.details = "Viewing Page:";
        presenceData.state = "Signing In";
    }
    else if (page.startsWith("/users")) {
        presenceData.details = "Viewing Page:";
        presenceData.state = "Looking for user";
    }
    else if (page.startsWith("/profile/")) {
        presenceData.details = "Viewing Profile:";
        presenceData.state = document.querySelector(".di-ib.po-r").textContent;
    }
    else if (page.startsWith("/store/")) {
        presenceData.details = "Viewing Store:";
        presenceData.state = document.querySelector(".comic-detail-title").textContent;
    }
    else if (page.startsWith("/manga/")) {
        presenceData.details = "Viewing Manga:";
        presenceData.state = document.querySelector(".h1-title").textContent;
    }
    else if (page.startsWith("/character/")) {
        presenceData.details = "Viewing character:";
        presenceData.state = document.querySelector(".h1.edit-info").textContent;
    }
    presence.setActivity(presenceData);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wcmVzZW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQztJQUM1QixRQUFRLEVBQUUsb0JBQW9CO0NBQy9CLENBQUMsQ0FBQTtBQUVGLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBRWhELFFBQVEsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTtJQUM3QixNQUFNLFlBQVksR0FBaUI7UUFDakMsYUFBYSxFQUFFLE1BQU07UUFDckIsY0FBYyxFQUFFLFNBQVM7S0FDMUIsQ0FBQztJQUVGLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO0lBQ3hDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBQztRQUM3QixZQUFZLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDO1FBQzNDLFlBQVksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLENBQUM7S0FDdEU7U0FDSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEVBQUM7UUFDcEMsWUFBWSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7UUFDdkMsWUFBWSxDQUFDLEtBQUssR0FBRyxxQkFBcUIsQ0FBQztLQUM1QztTQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBQztRQUNqQyxZQUFZLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztRQUN2QyxZQUFZLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztLQUNuQztTQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBQztRQUNqQyxZQUFZLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQTtRQUN0QyxZQUFZLENBQUMsS0FBSyxHQUFHLGtCQUFrQixDQUFBO0tBQ3hDO1NBQ0ksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFDO1FBQ3BDLFlBQVksQ0FBQyxPQUFPLEdBQUcsa0JBQWtCLENBQUE7UUFDekMsWUFBWSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFdBQVcsQ0FBQztLQUN4RTtTQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBQztRQUNsQyxZQUFZLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFBO1FBQ3ZDLFlBQVksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFdBQVcsQ0FBQztLQUNoRjtTQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBQztRQUNsQyxZQUFZLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFBO1FBQ3ZDLFlBQVksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLENBQUM7S0FDdEU7U0FDSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQUM7UUFDcEMsWUFBWSxDQUFDLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQztRQUM1QyxZQUFZLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUMsV0FBVyxDQUFDO0tBQzFFO0lBQ0gsUUFBUSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUMsQ0FBQyJ9