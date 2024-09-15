
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const cards = document.querySelector('.cards');
const getUserInfo = (gitName) =>{
  axios.get(`https:api.github.com/users/${gitName}`)
  .then((resp) => {
    console.log(resp)
    cards.appendChild(userDisplay(resp.data))
  })
  .catch(err => {console.log(err)});
}

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["TamiWohlers","adventurini","bdamore","lindseybrown4","JessicaBrown"];

/* 
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
//{login, avatar_URL, name, location, bio, followers, following, html_url}
function userDisplay(userInfo){
  const card = document.createElement('div');
  const userimg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const nameOfUser = document.createElement('h3');
  const username = document.createElement('p');
  const userLocation = document.createElement('p');
  const profile = document.createElement('p');
  const gitHubAddress = document.createElement('a');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  card.className = 'card';
  cardInfo.className = 'card-info';
  nameOfUser.className = 'username';

  card.appendChild(userimg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(nameOfUser);
  cardInfo.appendChild(username);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);
  profile.appendChild(gitHubAddress);

  userimg.src = userInfo.avatar_url;
  nameOfUser.textContent = userInfo.name;
  username.textContent = userInfo.login;
  userLocation.textContent = userInfo.location;
  gitHubAddress.href = userInfo.html_url;
  gitHubAddress.textContent = userInfo.html_url;
  userFollowers.textContent = userInfo.followers;
  userFollowing.textContent = userInfo.following;
  userBio.textContent = userInfo.bio;

  return card;
}
followersArray.forEach(user => getUserInfo(user));
//getUserInfo('3deckererron');
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
