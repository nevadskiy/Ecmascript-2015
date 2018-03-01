let browsers = ['Chrome', 'Firefox', 'Safari'];

// Keys
for (let browser in browsers) {
  console.log(browser); // 0 1 2
}

for (let browser of browsers) {
  console.log(browser) // Chrome Firefox Safari
}