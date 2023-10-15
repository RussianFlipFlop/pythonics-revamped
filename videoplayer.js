        var video = document.querySelectorAll('.video-wrapper');
      
        for (i = 0; i < video.length; i++) {
            
            (function(i) {
                
                var targetVideo = video[i].querySelector('video');
                
                targetVideo.onclick = function(){ 
                    
                    if (targetVideo.paused == false) {
                        
                        targetVideo.pause();
                        
                    } else { 
                        
                        targetVideo.play();
                        
                    }
                    
                }
                
                var overlayTarget = video[i].querySelector('.video-play-target');

                overlayTarget.onclick = function(){ 
                    
                    if (targetVideo.paused == false) {
                        
                        targetVideo.pause();
                        
                    } else { 
                        
                        targetVideo.play();
                        
                    }
                    
                }
                
                var volumeFill = video[i].querySelector(".volume-level-fill");
                
                console.log(volumeFill.volume);
                
                volumeFill.volume = 0.5;
                
                volumeFill.style.width = volumeFill.volume * 100 + '%';
                            
                volumeFill.onclick = function() {
                    
                    targetVideo.play();
                    
                }
                
                // use the same logic for changing where the video is on the timeline. 
                // setup the click area to be 1 pixel padding on each side and then have whats currently there as the bar. 
                
                var volumeBar = video[i].querySelector(".volume-level");
                
                volumeBar.onclick = function(e) {
                    
                    function round5(x) {
                        
                        return (x % 5) >= 2.5 ? parseInt(x / 5) * 5 + 5 : parseInt(x / 5) * 5;
                        
                    }
                    
                    var newVolume = round5(e.clientX - this.getBoundingClientRect().left);
                    
                    volumeFill.volume = newVolume;

                    volumeFill.style.width = newVolume + '%';

                }

                var playBtn = video[i].querySelector("[player='play']");
                
                playBtn.onclick = function() {
                    
                    targetVideo.play();
                    
                }
                var pauseBtn = video[i].querySelector("[player='pause']");
                
                pauseBtn.onclick = function() {
                    
                    console.log(pauseBtn);
                    
                    targetVideo.pause();
                    
                }
                
                var muteBtn = video[i].querySelector("[player='mute']");
                
                muteBtn.onclick = function() {
                    
                    console.log(muteBtn);
                    
                    if (targetVideo.muted == true) { 
                        
                        targetVideo.muted = false;
                        
                    } else { 
                        
                        targetVideo.muted = true;
                        
                    }
                }
                
                var restartBtn = video[i].querySelector("[player='restart']");
                
                restartBtn.onclick = function() {
                    
                    console.log(restartBtn);
                    
                    targetVideo.currentTime = 0;
                    
                }
                
                var loopBtn = video[i].querySelector("[player='loop']");
                
                loopBtn.onclick = function() {
                    
                    console.log(loopBtn);
                    
                    if (targetVideo.loop == true) { 
                        
                        targetVideo.loop = false;
                        
                    } else { 
                        
                        targetVideo.loop = true;
                        
                    }
                    
                }
                
                var miniBtn = video[i].querySelector("[player='mini']");
                                    
                var miniToggle = false;
                
                miniBtn.onclick = function() {
                                        
                    if (miniToggle == false) {
                        
                        miniToggle = true; 
                        
                        video[i].style.width = "25vw";
                        video[i].style.position = "fixed";

                    } else {
                        
                        miniToggle = false;

                        video[i].style.width = "100%";
                        video[i].style.position = "relative ";

                    }

                }
                
                // Full screen, same logic for the mini player, expect it'll be changing the max width to something small. 
                
                var fullBtn = video[i].querySelector("[player='full']");
                
                var fullToggle = false;
                
                fullBtn.onclick = function() {
                                        
                    if (fullToggle == false) {
                        
                        fullToggle = true; 
                        
                        video[i].style.position = "fixed";

                    } else {
                        
                        fullToggle = false;

                        video[i].style.position = "relative ";

                    }

                }
                
                var timestamp = video[i].querySelector("[player='time']");
               
                
                var timeline = video[i].querySelector("[player='timeline']");
                                
                targetVideo.ontimeupdate = function() { 
                    
                    var videoDuration = (targetVideo.duration / 100).toFixed(2);
                    
                		var duration = video[i].querySelector("[player='duration']");

                		var videoDuration = (targetVideo.duration / 100).toFixed(2);

                		duration.innerHTML = videoDuration;

                    var currentTime = (Math.round(targetVideo.currentTime) / 100).toFixed(2);
                    
                    timestamp.innerHTML = currentTime;
                    
                    var updateTimeline = (currentTime / videoDuration * 100);
                    
                    timeline.style.width = updateTimeline + '%';
                    
                }
                
            }(i));
            
        }
