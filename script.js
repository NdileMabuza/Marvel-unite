document.addEventListener('DOMContentLoaded', function() {
    const heroData = {
        thor: {
            bio: {
                name: "Thor",
                birth: "Asgard",
                alignment: "Good",
                race: "Asgardian",
                description: "Thor is the God of Thunder, wielding the enchanted hammer Mjolnir, and is a founding member of the Avengers."
            },
            stats: {
                Intelligence: "70%",
                Strength: "100%",
                Speed: "92%",
                Durability: "100%",
                Power: "100%",
                Combat: "100%"
            },
            responses: [
                "By Odin's beard, you dare challenge me?",
                "I am Thor, son of Odin. You are in the presence of a god.",
                "Mjolnir commands the storm, and so do I."
            ],
            image: "images/thor.jpg",
            color: "#e62429" // Red
        },
        ironman: {
            bio: {
                name: "Iron Man",
                birth: "New York City",
                alignment: "Good",
                race: "Human",
                description: "Iron Man's powers come from his advanced suit of armor, which grants him superhuman strength, flight, and an array of weapons."
            },
            stats: {
                Intelligence: "100%",
                Strength: "85%",
                Speed: "58%",
                Durability: "85%",
                Power: "100%",
                Combat: "64%"
            },
            responses: [
                "I am Iron Man.",
                "JARVIS, prepare the suit.",
                "Sometimes you gotta run before you can walk."
            ],
            image: "images/ironman.jpg",
            color: "#ffd700" // Gold
        },
        hulk: {
            bio: {
                name: "Hulk",
                birth: "Ohio",
                alignment: "Good",
                race: "Human (Radiation)",
                description: "Hulk possesses superhuman strength, durability, and healing abilities as a result of exposure to gamma radiation."
            },
            stats: {
                Intelligence: "88%",
                Strength: "100%",
                Speed: "47%",
                Durability: "100%",
                Power: "52%",
                Combat: "85%"
            },
            responses: [
                "Hulk smash!",
                "You wouldn't like me when I'm angry.",
                "Hulk is the strongest one there is!"
            ],
            image: "images/hulk.jpg",
            color: "#7CFC00" // Green
        },
        blackwidow: {
            bio: {
                name: "Black Widow",
                birth: "Russia",
                alignment: "Good",
                race: "Human",
                description: "Black Widow is a highly trained spy and assassin, with expertise in martial arts and espionage."
            },
            stats: {
                Intelligence: "75%",
                Strength: "13%",
                Speed: "27%",
                Durability: "32%",
                Power: "39%",
                Combat: "100%"
            },
            responses: [
                "I've got a very particular set of skills.",
                "You don't want to mess with me.",
                "I'm always picking up after you boys."
            ],
            image: "images/blackwidow.jpg",
            color: "#000000" // Black
        },
        hawkeye: {
            bio: {
                name: "Hawkeye",
                birth: "Iowa",
                alignment: "Good",
                race: "Human",
                description: "Hawkeye is an expert marksman and fighter, known for his precision with a bow and arrow."
            },
            stats: {
                Intelligence: "50%",
                Strength: "12%",
                Speed: "23%",
                Durability: "14%",
                Power: "26%",
                Combat: "80%"
            },
            responses: [
                "I never miss.",
                "You're gonna be okay, buddy.",
                "I'm not just a guy with a bow and arrow."
            ],
            image: "images/hawkeye.jpg",
            color: "#800080" // Purple
        },
        captainamerica: {
            bio: {
                name: "Captain America",
                birth: "America",
                alignment: "Good",
                race: "Human",
                description: "Captain America is a super-soldier with enhanced strength, speed, and endurance, wielding an indestructible shield."
            },
            stats: {
                Intelligence: "63%",
                Strength: "19%",
                Speed: "35%",
                Durability: "56%",
                Power: "55%",
                Combat: "100%"
            },
            responses: [
                "I can do this all day.",
                "Whatever it takes.",
                "Language!"
            ],
            image: "images/captainamerica.jpg",
            color: "#0000FF" // Blue
        },
        spiderman: {
            bio: {
                name: "Spider-Man",
                birth: "Queens, New York",
                alignment: "Good",
                race: "Human (Mutated)",
                description: "Spider-Man has superhuman strength, agility, and the ability to cling to walls, along with a 'spider-sense' that warns him of danger."
            },
            stats: {
                Intelligence: "90%",
                Strength: "55%",
                Speed: "67%",
                Durability: "60%",
                Power: "74%",
                Combat: "85%"
            },
            responses: [
                "With great power comes great responsibility.",
                "Friendly neighborhood Spider-Man at your service.",
                "Thwip!"
            ],
            image: "images/spiderman.jpg",
            color: "#FF0000" // Red
        },
        doctorstrange: {
            bio: {
                name: "Doctor Strange",
                birth: "Philadelphia",
                alignment: "Good",
                race: "Human",
                description: "Doctor Strange is a master of the mystic arts, with the ability to manipulate magical energies and cast spells."
            },
            stats: {
                Intelligence: "100%",
                Strength: "50%",
                Speed: "60%",
                Durability: "85%",
                Power: "100%",
                Combat: "60%"
            },
            responses: [
                "The bill comes due. Always.",
                "I've come to bargain.",
                "We never lose our demons, we only learn to live above them"
            ],
            image: "images/doctorstrange.jpg",
            color: "#FFA500" // Orange
        },
        scarletwitch: {
            bio: {
                name: "Scarlet Witch",
                birth: "Sokovia",
                alignment: "Good",
                race: "Human (Mutated)",
                description: "Scarlet Witch possesses vast magical powers, including reality manipulation, telekinesis, and energy projection."
            },
            stats: {
                Intelligence: "85%",
                Strength: "65%",
                Speed: "70%",
                Durability: "90%",
                Power: "100%",
                Combat: "80%"
            },
            responses: [
                "You took everything from me.",
                "I can control this.",
                "No more tears."
            ],
            image: "images/scarletwitch.jpg",
            color: "#FF00FF" // Magenta
        },
        vision: {
            bio: {
                name: "Vision",
                birth: "Created by Ultron & Tony Stark",
                alignment: "Good",
                race: "Android",
                description: "Vision is an android with superhuman strength, flight, and the ability to phase through solid matter."
            },
            stats: {
                Intelligence: "100%",
                Strength: "85%",
                Speed: "72%",
                Durability: "95%",
                Power: "98%",
                Combat: "70%"
            },
            responses: [
                "I am Vision.",
                "I am not what you think I am.",
                "A man can be more than the sum of his parts."
            ],
            image: "images/vision.jpg",
            color: "#00FFFF" // Cyan
        },
        falcon: {
            bio: {
                name: "Falcon",
                birth: "Harlem, New York",
                alignment: "Good",
                race: "Human",
                description: "Falcon has the ability to fly using a specially designed harness and is a skilled fighter and strategist."
            },
            stats: {
                Intelligence: "65%",
                Strength: "20%",
                Speed: "55%",
                Durability: "45%",
                Power: "30%",
                Combat: "80%"
            },
            responses: [
                "On your left!",
                "I can fly.",
                "I do what he does, just slower."
            ],
            image: "images/falcon.jpg",
            color: "#808080" // Gray
        },
        antman: {
            bio: {
                name: "Ant-Man",
                birth: "San Francisco",
                alignment: "Good",
                race: "Human",
                description: "Ant-Man can shrink to the size of an insect while increasing in strength, and can communicate with and control ants."
            },
            stats: {
                Intelligence: "75%",
                Strength: "25%",
                Speed: "30%",
                Durability: "50%",
                Power: "65%",
                Combat: "70%"
            },
            responses: [
                "I do some stupid stuff.",
                "I shrink and grow.",
                "I'm not just a guy in a suit."
            ],
            image: "images/antman.jpg",
            color: "#FFD700" // Gold
        }
    };

    const heroGrid = document.querySelector('.hero-grid');
    const chatBoxContainer = document.querySelector('.chat-box-container');
    const themeSwitch = document.getElementById('theme-checkbox');
    const emojiPicker = document.createElement('div');
    emojiPicker.className = 'emoji-picker';
    emojiPicker.innerHTML = `
        <button class="emoji-option">😊</button>
        <button class="emoji-option">😢</button>
        <button class="emoji-option">😂</button>
        <button class="emoji-option">😍</button>
        <button class="emoji-option">😎</button>
    `;

    let selectedHero = null;

    // Function to create hero cards
    function createHeroCards() {
        if (heroGrid) {
            Object.keys(heroData).forEach(heroKey => {
                const hero = heroData[heroKey];
                const heroCard = document.createElement('div');
                heroCard.className = 'hero-card';
                heroCard.innerHTML = `
                    <img src="${hero.image}" alt="${hero.bio.name}">
                    <h3>${hero.bio.name}</h3>
                    <p>${hero.bio.race}</p>
                `;
                heroCard.addEventListener('click', () => {
                    selectedHero = heroKey;
                    showHeroModal(hero);
                    showChatBox(hero.bio.name, hero.color);
                });
                heroGrid.appendChild(heroCard);
            });
        }
    }

    // Function to show hero modal
    function showHeroModal(hero) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content" style="background-image: url('${hero.image}'); background-size: cover; background-position: center; background-repeat: no-repeat; background-opacity: 0.2;">
                <span class="close">&times;</span>
                <div>
                    <h3>Bio</h3>
                    <p><strong>Fighting Name:</strong> ${hero.bio.name}</p>
                    <p><strong>Place of Birth:</strong> ${hero.bio.birth}</p>
                    <p><strong>Alignment:</strong> ${hero.bio.alignment}</p>
                    <p><strong>Race:</strong> ${hero.bio.race}</p>
                    <p><strong>Description:</strong> ${hero.bio.description}</p>
                    ${hero.bio.gender ? `<p><strong>Gender:</strong> ${hero.bio.gender}</p>` : ''}
                </div>
                <div>
                    <h3>Power Stats</h3>
                    ${Object.entries(hero.stats).map(([key, value]) => `
                        <p><strong>${key}:</strong> ${value}</p>
                    `).join('')}
                </div>
            </div>
        `;
        modal.querySelector('.close').addEventListener('click', () => {
            modal.remove();
        });
        document.body.appendChild(modal);
    }

    // Function to show chat box
    function showChatBox(heroName, heroColor) {
        if (chatBoxContainer) {
            chatBoxContainer.style.display = 'flex';
            chatBoxContainer.innerHTML = `
                <div class="chat-header" style="background-color: ${heroColor};">
                    <img src="images/${heroName.toLowerCase().replace(' ', '')}.jpg" alt="${heroName}" style="width: 40px; height: 40px; border-radius: 50%; margin-right: 10px;">
                    <span>${heroName}</span>
                    <button class="close-chat">&times;</button>
                </div>
                <div class="chat-messages">
                    <!-- Messages will be dynamically inserted here -->
                </div>
                <div class="chat-input">
                    <input type="text" placeholder="Type a message...">
                    <button class="emoji-button">😊</button>
                    <button class="send-button">Send</button>
                </div>
            `;

            const chatMessages = chatBoxContainer.querySelector('.chat-messages');
            const chatInput = chatBoxContainer.querySelector('.chat-input input');
            const sendButton = chatBoxContainer.querySelector('.send-button');
            const emojiButton = chatBoxContainer.querySelector('.emoji-button');
            const closeChatButton = chatBoxContainer.querySelector('.close-chat');

            closeChatButton.addEventListener('click', () => {
                chatBoxContainer.style.display = 'none';
            });

            emojiButton.addEventListener('click', () => {
                emojiPicker.classList.toggle('show');
            });

            document.querySelectorAll('.emoji-option').forEach(emoji => {
                emoji.addEventListener('click', () => {
                    chatInput.value += emoji.textContent;
                    emojiPicker.classList.remove('show');
                });
            });

            sendButton.addEventListener('click', () => {
                const message = chatInput.value.trim();
                if (message) {
                    addMessageToChat('user', message);
                    chatInput.value = '';
                    setTimeout(() => {
                        const heroResponse = getHeroResponse(heroName);
                        addMessageToChat('hero', heroResponse);
                    }, 500);
                }
            });

            function addMessageToChat(sender, message) {
                const messageElement = document.createElement('div');
                messageElement.className = `message ${sender}`;
                messageElement.textContent = message;
                chatMessages.appendChild(messageElement);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }

            function getHeroResponse(heroName) {
                const hero = Object.values(heroData).find(hero => hero.bio.name === heroName);
                const responses = hero.responses;
                const randomIndex = Math.floor(Math.random() * responses.length);
                return responses[randomIndex];
            }

            document.body.appendChild(emojiPicker);
        }
    }

    // Function to toggle theme
    function toggleTheme() {
        const body = document.body;
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        }
    }

    // Load saved theme
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
    }

    // Event listeners
    if (themeSwitch) {
        themeSwitch.addEventListener('change', toggleTheme);
    }

    // Initialize the app
    createHeroCards();

    // Snake Game Logic
    const canvas = document.getElementById('gameCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        const box = 20;
        let snake = [{x: 9 * box, y: 10 * box}];
        let food = {
            x: Math.floor(Math.random() * 20) * box,
            y: Math.floor(Math.random() * 20) * box
        };
        let direction = null;
        let game = setInterval(drawGame, 100);
        let heroImages = Object.values(heroData).map(hero => {
            const img = new Image();
            img.src = hero.image;
            return img;
        });

        function drawGame() {
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < snake.length; i++) {
                ctx.fillStyle = i === 0 ? 'green' : 'white';
                ctx.fillRect(snake[i].x, snake[i].y, box, box);

                ctx.strokeStyle = 'red';
                ctx.strokeRect(snake[i].x, snake[i].y, box, box);
            }

            ctx.drawImage(heroImages[Math.floor(Math.random() * heroImages.length)], food.x, food.y, box, box);

            let snakeX = snake[0].x;
            let snakeY = snake[0].y;

            if (direction === 'LEFT') snakeX -= box;
            if (direction === 'UP') snakeY -= box;
            if (direction === 'RIGHT') snakeX += box;
            if (direction === 'DOWN') snakeY += box;

            if (snakeX === food.x && snakeY === food.y) {
                food = {
                    x: Math.floor(Math.random() * 20) * box,
                    y: Math.floor(Math.random() * 20) * box
                };
            } else {
                snake.pop();
            }

            let newHead = {
                x: snakeX,
                y: snakeY
            };

            if (snakeX < 0 || snakeY < 0 || snakeX >= canvas.width || snakeY >= canvas.height || collision(newHead, snake)) {
                clearInterval(game);
            }

            snake.unshift(newHead);
        }

        function collision(head, array) {
            for (let i = 0; i < array.length; i++) {
                if (head.x === array[i].x && head.y === array[i].y) {
                    return true;
                }
            }
            return false;
        }

        document.addEventListener('keydown', function(event) {
            if (event.keyCode === 37 && direction !== 'RIGHT') {
                direction = 'LEFT';
            } else if (event.keyCode === 38 && direction !== 'DOWN') {
                direction = 'UP';
            } else if (event.keyCode === 39 && direction !== 'LEFT') {
                direction = 'RIGHT';
            } else if (event.keyCode === 40 && direction !== 'UP') {
                direction = 'DOWN';
            }
        });
    }
});
