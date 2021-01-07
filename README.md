# MarkerBugRNMapsClustering

I have been experimenting a bit after using this package in our project to do the clustering of markers. I saw markers and clusters sometimes disappearing on the map. I investigated the issue and it happens when the map re-renders. I tested this in version 3.4.0 and there you have this bug, I also tested with version 3.3.0 and there it seems to work just fine. Issue #200 might also have to do with this. I added a test project where you can easily test it with.

Repro steps:
 - Run the project, it countains a counter that forces a re-render each second
 - Check the markers on the map
 - 
 Expected:
Markers stay visible and stay in place without flickering

Actual:
Markers dissapear 
 
