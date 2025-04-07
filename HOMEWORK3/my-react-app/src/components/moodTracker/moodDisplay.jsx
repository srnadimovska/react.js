function MoodDisplay({ currentMood}) {
    const moodEmojiMap = {
        Happy: "😊",
        Sad: "😢",
        Excited: "🤩",
        Tired: "😴",
      };

return (
    <div>
        <h2>Your mood is: {currentMood}</h2>
        <p>{moodEmojiMap[currentMood]}</p>
    </div>
)
}
export default MoodDisplay