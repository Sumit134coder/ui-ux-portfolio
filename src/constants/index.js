const passwordRules = [
  { title: "Should contain Special characters", value: false },
  { title: "Should contain Numeric characters", value: false },
  { title: "Should contain Uppercase letters", value: false },
  { title: "Should contain Lowercase letters", value: false },
];

const passwordFacts = [
  "Password Length: Longer passwords are generally more secure than shorter ones. It is recommended to use passwords that are at least 12 characters long.",
  "Complexity: Passwords should contain a combination of uppercase and lowercase letters, numbers, and special characters (such as !, @, #, $). This increases the complexity and makes them harder to guess or crack.",
  "Unique Passwords: Using the same password for multiple accounts is highly discouraged. If one account gets compromised, all the other accounts using the same password will also be at risk. It is best to use unique passwords for each online account.",
  "Two-Factor Authentication (2FA): Enabling two-factor authentication adds an extra layer of security to your online accounts. It typically requires a second verification method, such as a unique code sent to your mobile device, in addition to your password.",
  "Password Managers: Using a password manager can help generate and securely store complex passwords for your online accounts. It eliminates the need to remember multiple passwords and reduces the risk of using weak or easily guessable passwords.",
  "Avoid Common Passwords: Common passwords, such as '123456' or 'password,' are easily guessable and should be avoided. Similarly, using personal information like birthdates, names, or addresses as passwords is not secure.",
  "Regularly Update Passwords: It is good practice to change passwords periodically, especially for sensitive accounts like email or banking. Regularly updating passwords can help mitigate the risk of unauthorized access.",
  "Beware of Phishing: Be cautious of phishing attempts, where attackers trick you into revealing your passwords through deceptive emails, websites, or messages. Always verify the legitimacy of requests before entering your password.",
  "Avoid Sharing Passwords: Sharing passwords, even with close friends or family members, increases the likelihood of unauthorized access. It's best to keep your passwords confidential and not share them with anyone.",
  "Security Breaches: Stay informed about security breaches that occur on websites or services you use. If a breach occurs, change your password immediately to protect your account."
];

export {
    passwordRules, passwordFacts
}
