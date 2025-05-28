prog-5-d5: Algo
Coffee Machine – Basic Logic Simulation
Overview
This project is a basic simulation of the logic behind an automatic coffee machine. It models a typical user experience: making a payment, selecting a drink, and receiving the beverage — with simple error handling at each stage. This minimal prototype was built for an academic purpose but could easily serve as a starting point for a more advanced system.

Features
The user goes through three main steps to get a hot drink:

Make a Payment

Select a Drink

Receive the Coffee

Each step includes checks to manage common issues (e.g., out-of-stock items, missing cup, etc.).

Step-by-Step Flow
1. Payment
Supported payment methods:

Credit/debit card

Mobile payments (e.g., Mobile Money)

Potential issues:

Insufficient funds

Payment failure

Connection problems

2. Drink Selection
After a successful payment, the user chooses a drink (e.g., espresso, latte). Only a few basic types are currently simulated.

Possible problems:

No coffee pod detected

Water tank is empty

Power outage or internal machine error (e.g., temperature or pressure malfunction)

3. Dispensing
If everything checks out, the machine tries to serve the drink.

However, if no cup is detected, the process is stopped and a warning is shown.