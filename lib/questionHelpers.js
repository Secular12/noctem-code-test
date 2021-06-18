const interpretRating = interpretations => questions => {
  const totalRating = questions
    ?.reduce((total, question) => total + (question?.value || 0), 0) ?? 0

  const foundInterpretation = interpretations.find(({ min, max }) => {
    if (!min && !max) {
      return true
    } else if (!min) {
      return totalRating <= max
    } else if (!max) {
      return totalRating >= min
    } else {
      return totalRating <= max && totalRating >= min
    }
  })

  return foundInterpretation.value
}

const interpretIsiRating = interpretRating([
  { min: 0, value: 'No clinically significant insomnia' },
  { min: 8, value: 'Subthreshold insomnia' },
  { min: 15, value: 'Clinical insomnia (moderate severity)' },
  { min: 22, value: 'Clinical insomnia (severe)' }
])

module.exports = {
  interpretIsiRating,
  interpretRating
}
