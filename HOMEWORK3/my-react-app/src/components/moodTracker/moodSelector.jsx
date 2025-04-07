function MoodSelector ({ moodChange}) {
    const moods = ["Happy","Sad","Excited","Tired"];
    return (
        <div>
            <h2>Select your mood:</h2>
            {moods.map((mood) => (
                <button key={mood} onClick={() => moodChange(mood)}>
                    {mood}
                </button>
            ))}
        </div>
    )
}
export default MoodSelector