const presence = new Presence({
    clientId: "730385907147997254"
});
const timeStamp = Math.floor(Date.now() / 1000);
presence.on("UpdateData", () => {
    const presenceData = {
        largeImageKey: "code",
        startTimestamp: timeStamp
    };
    const page = document.location.pathname;
    if (page.startsWith("/learn")) {
        presenceData.details = "Choosing:";
        presenceData.state = "Currently checking stats/codes";
    }
    else if (page.startsWith("/welcome/")) {
        presenceData.details = "Viewing Page:";
        presenceData.state = "Deciding what to learn!";
    }
    else if (page.startsWith("/courses/")) {
        presenceData.details = "Learning:";
        presenceData.state = "Reading Article or Taking Quiz/Lesson";
    }
    else if (page.startsWith("/profiles/")) {
        presenceData.details = "Checking Profile:",
            presenceData.state = document.querySelector(".label__2YO_cDf1Lu9PDDsn62kz6L").textContent;
    }
    else if (page.startsWith("/search")) {
        presenceData.details = "Searching:";
        presenceData.state = "Looking for something 🤔";
    }
    presence.setActivity(presenceData);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wcmVzZW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQztJQUM1QixRQUFRLEVBQUUsb0JBQW9CO0NBQy9CLENBQUMsQ0FBQztBQUVILE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBRWhELFFBQVEsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTtJQUM3QixNQUFNLFlBQVksR0FBaUI7UUFDakMsYUFBYSxFQUFFLE1BQU07UUFDckIsY0FBYyxFQUFFLFNBQVM7S0FDMUIsQ0FBQztJQUNGLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO0lBQ3hDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBQztRQUM1QixZQUFZLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztRQUNuQyxZQUFZLENBQUMsS0FBSyxHQUFHLGdDQUFnQyxDQUFDO0tBQ3ZEO1NBQ0ksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFDO1FBQ3BDLFlBQVksQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLFlBQVksQ0FBQyxLQUFLLEdBQUcseUJBQXlCLENBQUM7S0FDaEQ7U0FDSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEVBQUM7UUFDcEMsWUFBWSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7UUFDbkMsWUFBWSxDQUFDLEtBQUssR0FBRyx1Q0FBdUMsQ0FBQTtLQUM3RDtTQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBQztRQUNyQyxZQUFZLENBQUMsT0FBTyxHQUFHLG1CQUFtQjtZQUMxQyxZQUFZLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxXQUFXLENBQUM7S0FDM0Y7U0FDSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUM7UUFDbEMsWUFBWSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUE7UUFDbkMsWUFBWSxDQUFDLEtBQUssR0FBRywwQkFBMEIsQ0FBQTtLQUNoRDtJQUNELFFBQVEsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFDLENBQUMifQ==