/*AUTHENTICATION vs AUTHORIZATION
🟢 Authentication (Who are you?)

👉 user ki identity verify karna

Example:
login with email & password
server check karta hai → valid hai ya nahi
User: "main Vaishnavi hoon"
Server: "prove it"

✔ output → user verified

🔴 Authorization (What can you do?)

👉 user kya access kar sakta hai

Example:
admin → delete allowed
normal user → delete ❌
User: "main login hoon"
Server: "tum kya kar sakte ho?"
🎯 One-line (interview)

👉 Authentication = identity check
👉 Authorization = permission check

🔐 🔥 JWT (JSON Web Token)
🧠 Kya hota hai?

👉 ek token (string) hota hai jo login ke baad milta hai

⚙️ Flow
Login → token generate
       ↓
Client → token store
       ↓
Request → token send (headers)
       ↓
Server → verify token
🔵 Token create
const token = jwt.sign(
  { id: user.id, role: user.role },
  SECRET_KEY
);
🔴 Token send
Authorization: Bearer <token>
🟢 Token verify
const verified = jwt.verify(token, SECRET_KEY);
req.user = verified;
📦 Token ke andar kya hota hai?
{
  "id": 1,
  "role": "admin",
  "iat": 123,
  "exp": 456
}
⚠️ Important

👉 client poora token bhejta hai
👉 server usse decode + verify karta hai

🔵 Middleware (JWT auth)
function auth(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];

  const verified = jwt.verify(token, SECRET_KEY);
  req.user = verified;

  next();
}
🔴 Authorization (JWT role check)
function isAdmin(req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(403).send("Access denied");
  }
  next();
}
🍪 🔥 SESSION-BASED AUTH
🧠 Kya hota hai?

👉 server user ko session me store karta hai
👉 browser me cookie save hoti hai

⚙️ Flow
Login → session create (server)
       ↓
Cookie send (browser)
       ↓
Browser → cookie auto send
       ↓
Server → session check
🔵 Login
req.session.user = user;
🔴 Auth check
if (!req.session.user) {
  return res.send("Not logged in");
}
🟢 Logout
req.session.destroy();
🍪 Cookie kya hai?

👉 browser me store hoti hai

connect.sid

👉 ye session ID hoti hai

🆚 JWT vs SESSION
Feature	JWT	Session
Storage	client (token)	server (session)
Send	headers	cookies
Scalability	high	medium
Control	less	more
💡 Simple analogy

👉 JWT:
“ID card leke ghoom”

👉 Session:
“office me tera record saved hai”

🔥 VALIDATION

👉 input check karna

if (!email || !password) {
  return res.send("Required fields missing");
}
Example
if (age < 0) {
  return res.send("Invalid age");
}
🎯 Full Flow (combine sab)
Signup → DB me save
Login → JWT ya session
       ↓
Request → auth check
       ↓
Authorization → role check
       ↓
Access allowed / denied
💥 Final Summary

✔ Authentication → login verify
✔ Authorization → permission check
✔ JWT → token-based auth
✔ Session → cookie-based auth
✔ Validation → input check

🎯 Final Interview Line

👉 “I have implemented authentication using JWT and session-based approaches, along with role-based authorization and input validation in a Node.js application.”

*/