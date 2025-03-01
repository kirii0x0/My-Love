{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Set the birthday date\
const birthdayDate = new Date("March 15, 2025 00:00:00").getTime();\
\
// Countdown function\
function updateCountdown() \{\
    const now = new Date().getTime();\
    const timeLeft = birthdayDate - now;\
\
    // Calculate days, hours, minutes, seconds\
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));\
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));\
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);\
\
    document.getElementById("countdown").innerHTML = `Time left: $\{days\}d $\{hours\}h $\{minutes\}m $\{seconds\}s`;\
\
    // If the countdown is finished\
    if (timeLeft < 0) \{\
        document.getElementById("countdown").innerHTML = "Happy Birthday!";\
    \}\
\}\
\
// Update the countdown every second\
setInterval(updateCountdown, 1000);\
}