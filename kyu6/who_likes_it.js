function likes(names) {
  const answers = {
    0: `no one likes this`,
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }
  return names.length < 4 ? answers[names.length] : answers[4]
}
