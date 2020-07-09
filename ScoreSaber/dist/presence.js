const presence = new Presence({
    clientId: "730725300111015976"
});
const timeStamp = Math.floor(Date.now() / 1000);
presence.on("UpdateData", () => {
    const presenceData = {
        largeImageKey: "saber",
        startTimestamp: timeStamp
    };
    const page = document.location.pathname;
    if (page.startsWith("/u/")) {
        presenceData.details = "Viewing Profile:";
        presenceData.state = document.querySelector(".title.is-5").textContent;
    }
    else if (page.startsWith("/global")) {
        presenceData.details = "Viewing Ranks:";
        presenceData.state = "Global Leaderboard";
    }
    else if (page.startsWith("/faq")) {
        presenceData.details = "Viewing Page:";
        presenceData.state = "FAQ/External Links";
    }
    else if (page.startsWith("/leaderboard")) {
        presenceData.details = "Viewing Song Leaderboard:";
        presenceData.state = document.querySelector(".title.is-5").textContent;
    }
    presence.setActivity(presenceData);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wcmVzZW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQztJQUM1QixRQUFRLEVBQUUsb0JBQW9CO0NBQy9CLENBQUMsQ0FBQTtBQUVGLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBRWhELFFBQVEsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTtJQUM3QixNQUFNLFlBQVksR0FBaUI7UUFDakMsYUFBYSxFQUFFLE9BQU87UUFDdEIsY0FBYyxFQUFFLFNBQVM7S0FDMUIsQ0FBQztJQUVGLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO0lBQ3hDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBQztRQUN6QixZQUFZLENBQUMsT0FBTyxHQUFHLGtCQUFrQixDQUFDO1FBQzFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxXQUFXLENBQUM7S0FDeEU7U0FDSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUM7UUFDbEMsWUFBWSxDQUFDLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQztRQUN4QyxZQUFZLENBQUMsS0FBSyxHQUFHLG9CQUFvQixDQUFDO0tBQzNDO1NBQ0ksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFDO1FBQy9CLFlBQVksQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFBO1FBQ3RDLFlBQVksQ0FBQyxLQUFLLEdBQUcsb0JBQW9CLENBQUE7S0FDMUM7U0FDSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEVBQUM7UUFDdkMsWUFBWSxDQUFDLE9BQU8sR0FBRywyQkFBMkIsQ0FBQTtRQUNsRCxZQUFZLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsV0FBVyxDQUFDO0tBQ3hFO0lBQ0QsUUFBUSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUMsQ0FBQyJ9