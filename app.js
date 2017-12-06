var self = {
	initialize: function () {
		$ = document.querySelector.bind(document);
		self.fps = 40.0;
		self.dt = 1.0/self.fps;
		self.balloons = $('.balloonDiv');
		self.balloonPng = 'https://pngimg.com/uploads/balloon/balloon_PNG4958.png';
		//self.balloonCount = 0;
		self.balloonInterval = setInterval(self.releaseBalloon, 2000);
	},

	releaseBalloon: function () {
		//self.balloonDiv.innerHTML += string.Format('<img src="{0}" class="balloon{1}"></img>', self.balloonPng, self.balloonCount);
		var newb = document.createElement('img');
		newb.src = self.balloonPng;
		newb.className = 'balloon';
		newb.style.left = Math.floor(Math.random() * 100) + '%';
		newb.width = "100";
		setTimeout(function () {
			newb.remove();
		}, 6000);
		self.balloons.appendChild(newb);
		self.balloonCount++;
	},
};
