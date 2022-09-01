const getInitials = (name) => {
	if (name !== "") {
  	const splittedName = name.split(" ")
    const firstLetter = splittedName[0][0].toUpperCase()
    const lastLetter = splittedName[splittedName.length - 1][0].toUpperCase()
    return `${firstLetter}${lastLetter}`
  } else {
  	return ""
  }
}

let username = prompt("Digite o nome de usuário:")

const body = document.querySelector("body")
body.style.fontFamily = "sans-serif"
body.style.display = "flex"
body.style.flexDirection = "column"
body.style.rowGap = "1rem"

const form = document.createElement("form")
form.style.boxShadow = "1px 1px 10px 0px rgba(0,0,0,0.5)"
form.style.borderRadius = ".25rem"
form.style.padding = "1rem"
form.style.display = "flex"
form.style.flexDirection = "column"
form.style.rowGap = "1rem"

const textLabel = document.createElement("label")
textLabel.setAttribute("for", "tweetBox")
textLabel.innerHTML = "What's on your mind?"
textLabel.style.position = "relative"

const submitBtn = document.createElement("button")
submitBtn.innerHTML = "Post"
submitBtn.style.borderRadius = ".25rem"
submitBtn.style.border = "none"
submitBtn.style.padding = ".5rem"
submitBtn.style.width = "3.5rem"
submitBtn.style.fontWeight = "600"
submitBtn.style.cursor = "pointer"
submitBtn.style.backgroundColor = "#DDE4ED"

const textArea = document.createElement("textarea")
textArea.setAttribute("id", "tweetBox")
textArea.setAttribute("rows", "4")
textArea.style.padding = ".5rem 1rem"
textArea.style.borderRadius = ".25rem"

const errorMessage = document.createElement("span")
errorMessage.innerHTML = "Você excedeu o limite de caracteres."
errorMessage.style.padding = ".5rem 1rem"
errorMessage.style.backgroundColor = "#ECF235"
errorMessage.style.fontWeight = "600"
errorMessage.style.color = "#000000"
errorMessage.style.fontSize = ".8rem"
errorMessage.style.borderRadius = ".5rem"
errorMessage.style.width = "fit-content"
errorMessage.style.display = "none"

textArea.addEventListener("keyup", () => {
	if (textArea.value.length >= 280) {
  	errorMessage.style.display = "inherit"
    textArea.style.outline = "1px solid #FF0000"
    submitBtn.setAttribute("disabled", true)
  } else {
  	errorMessage.style.display = "none"
    textArea.style.outline = "none"
    submitBtn.removeAttribute("disabled")
  }
})

const tweetsBox = document.createElement("div")
tweetsBox.style.display = "grid"
tweetsBox.style.gridTemplateColumns = "1fr 1fr"
tweetsBox.style.gap = "2rem"

form.appendChild(textLabel)
form.appendChild(textArea)
form.appendChild(errorMessage)
form.appendChild(submitBtn)
body.appendChild(form)
body.appendChild(tweetsBox)

const createDivider = () => {
	const divider = document.createElement("hr")
  divider.style.width = "100%"
  divider.style.border = "none"
  divider.style.borderTop = "1px solid #B0B8C2"
  return divider
}

const appendTweet = (tweet) => {
	const newTweet = document.createElement("div")
  newTweet.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.5)"
  newTweet.style.borderRadius = ".25rem"
  newTweet.style.display = "flex"
  newTweet.style.flexDirection = "column"
  newTweet.style.rowGap = ".5rem"
  newTweet.style.padding = "1rem 0"
  
  const tweetHeader = document.createElement("div")
  tweetHeader.style.display = "flex"
  tweetHeader.style.padding = "0 1rem"
  tweetHeader.style.columnGap = "1rem"
  tweetHeader.style.alignItems = "center"
  
  const tweetAvatar = document.createElement("div")
  tweetAvatar.style.width = "2rem"
  tweetAvatar.style.height = "2rem"
  tweetAvatar.style.borderRadius = "1rem"
  tweetAvatar.style.backgroundColor = "#9A5075"
  tweetAvatar.innerHTML = getInitials(username)
  tweetAvatar.style.display = "flex"
  tweetAvatar.style.justifyContent = "center"
  tweetAvatar.style.alignItems = "center"
  tweetAvatar.style.color = "#FFFFFF"
  
  const tweetUser = document.createElement("span")
  tweetUser.innerHTML = username
  tweetUser.style.fontWeight = "600"
  
  const tweetContent = document.createElement("span")
  tweetContent.innerHTML = tweet
  tweetContent.style.paddingLeft = "1rem"
  
  const likeBtn = document.createElement("button")
  likeBtn.innerHTML = "Curtir (0)"
  likeBtn.setAttribute("value", "0")
  likeBtn.style.borderRadius = ".25rem"
  likeBtn.style.border = "none"
  likeBtn.style.padding = ".5rem"
  likeBtn.style.width = "5rem"
  likeBtn.style.fontWeight = "600"
  likeBtn.style.cursor = "pointer"
  likeBtn.style.marginLeft = "1rem"
  likeBtn.style.backgroundColor = "#DDE4ED"
  
  likeBtn.addEventListener("click", (e) => {
  	let count = parseInt(e.target.value)
  	e.target.innerHTML = `Curtir (${count+1})`
    e.target.value = count + 1
  })
  
  tweetHeader.appendChild(tweetAvatar)
  tweetHeader.appendChild(tweetUser)
  newTweet.appendChild(tweetHeader)
  newTweet.appendChild(createDivider())
  newTweet.appendChild(tweetContent)
  newTweet.appendChild(createDivider())
  newTweet.appendChild(likeBtn)
  
  tweetsBox.insertBefore(newTweet, tweetsBox.firstChild)
}

form.addEventListener("submit", (e) => {
	e.preventDefault()
  let tweet = form.elements["tweetBox"]
  if (tweet.value !== "") {
  	appendTweet(tweet.value)
  	tweet.value = ""  
  }
})