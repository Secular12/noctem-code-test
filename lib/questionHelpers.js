const interpretRating = interpretations => questions => {
  const totalRating = Object.values(questions ?? {})
    ?.reduce((total, question) => total + (question?.value || 0), 0) ?? 0

  const foundInterpretation = interpretations.find(({ min, max }) => {
    if (!min && min !== 0 && !max && max !== 0) {
      return true
    } else if (!min && min !== 0) {
      return totalRating <= max
    } else if (!max && max !== 0) {
      return totalRating >= min
    } else {
      return totalRating <= max && totalRating >= min
    }
  })

  return foundInterpretation.value
}

const interpretIsiRating = interpretRating([
  { max: 7, min: 0, value: 'No clinically significant insomnia' },
  { max: 14, min: 8, value: 'Subthreshold insomnia' },
  { max: 21, min: 15, value: 'Clinical insomnia (moderate severity)' },
  { min: 22, value: 'Clinical insomnia (severe)' }
])

module.exports = {
  interpretIsiRating,
  interpretRating
}
