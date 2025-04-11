
// 'use client'

// import { useEffect, useRef, useState } from 'react';
// import p5 from 'p5';

// const TrafficSimulation = () => {
//     const sketchRef = useRef();
//     const [trafficDensity, setTrafficDensity] = useState(1); // Nombre de véhicules par seconde (1 par défaut)
//     const simulationState = useRef({
//         vehicles: [],
//         trafficLights: [],
//         vehicleSpawnTimer: 0,
//         vehiclesToSpawnPerFrame: 0, // Nombre de véhicules à générer par frame
//     });

//     // Constantes (équivalent à settings.py)
//     const WIDTH = 1400;
//     const HEIGHT = 800;
//     const FPS = 600; // Frames par seconde
//     const GAP_TRAFFIC = {
//         a: {
//             right: { bus: 10, bike: 10, car: 9, rickshaw: 10, truck: 5 },
//             left: { bus: 50, bike: 35, car: 30, rickshaw: 35, truck: 35 },
//             down: { bus: 10, bike: 10, car: 10, rickshaw: 10, truck: 10 },
//             up: { bus: 50, bike: 44, car: 60, rickshaw: 50, truck: 40 },
//         },
//         b: {
//             right: { bus: 83, bike: 44, car: 60, rickshaw: 50, truck: 70 },
//             left: { bus: 50, bike: 35, car: 30, rickshaw: 35, truck: 35 },
//             down: { bus: 10, bike: 10, car: 10, rickshaw: 10, truck: 10 },
//             up: { bus: 50, bike: 44, car: 60, rickshaw: 50, truck: 40 },
//         },
//         c: {
//             right: { bus: 83, bike: 44, car: 60, rickshaw: 50, truck: 70 },
//             left: { bus: 50, bike: 35, car: 30, rickshaw: 35, truck: 35 },
//             down: { bus: 10, bike: 10, car: 10, rickshaw: 10, truck: 10 },
//             up: { bus: 50, bike: 44, car: 60, rickshaw: 50, truck: 40 },
//         },
//         d: {
//             right: { bus: 83, bike: 44, car: 60, rickshaw: 50, truck: 70 },
//             left: { bus: 50, bike: 35, car: 30, rickshaw: 35, truck: 35 },
//             down: { bus: 10, bike: 10, car: 10, rickshaw: 10, truck: 10 },
//             up: { bus: 50, bike: 25, car: 35, rickshaw: 28, truck: 40 },
//         },
//         e: {
//             right: { bus: 83, bike: 44, car: 60, rickshaw: 50, truck: 70 },
//             left: { bus: 50, bike: 35, car: 30, rickshaw: 35, truck: 35 },
//             down: { bus: 10, bike: 10, car: 10, rickshaw: 10, truck: 10 },
//             up: { bus: 50, bike: 44, car: 60, rickshaw: 28, truck: 40 },
//         },
//         f: {
//             right: { bus: 83, bike: 44, car: 60, rickshaw: 50, truck: 70 },
//             left: { bus: 50, bike: 35, car: 30, rickshaw: 35, truck: 35 },
//             down: { bus: 10, bike: 10, car: 10, rickshaw: 10, truck: 10 },
//             up: { bus: 50, bike: 44, car: 60, rickshaw: 80, truck: 40 },
//         },
//     };
//     const GAP_VEHICLE = {
//         a: {
//             right: { bus: 15, bike: 12, car: 15, rickshaw: 20, truck: 15 },
//             down: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 15 },
//             left: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 70 },
//             up: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 70 },
//         },
//         b: {
//             right: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 20 },
//             down: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 15 },
//             left: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 70 },
//             up: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 70 },
//         },
//         c: {
//             right: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 20 },
//             down: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 15 },
//             left: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 70 },
//             up: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 70 },
//         },
//         d: {
//             right: { bus: 20, bike: 12, car: 16, rickshaw: 10, truck: 20 },
//             down: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 15 },
//             left: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 70 },
//             up: { bus: 83, bike: 43, car: 55, rickshaw: 50, truck: 70 },
//         },
//         e: {
//             right: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 20 },
//             down: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 15 },
//             left: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 70 },
//             up: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 70 },
//         },
//         f: {
//             right: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 20 },
//             down: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 15 },
//             left: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 70 },
//             up: { bus: 20, bike: 12, car: 16, rickshaw: 60, truck: 70 },
//         },
//     };
//     const NEXT_INTERSECTION = {
//         right: { a: "b", b: "c", c: null, f: "e", e: "d", d: null },
//         left: { c: "b", b: "a", a: null, d: "e", e: "f", f: null },
//         down: { c: "d", d: null, b: "e", e: null, a: "f", f: null },
//         up: { d: "c", c: null, e: "b", b: null, f: "a", a: null },
//     };
//     const stopLines = {
//         a: { up: 218, down: 313, left: 198, right: 275 },
//         b: { up: 218, down: 313, left: 666, right: 255 },
//         c: { up: 218, down: 313, left: 1130, right: 1208 },
//         d: { up: 600, down: 700, left: 198, right: 275 },
//         e: { up: 600, down: 700, left: 666, right: 742 },
//         f: { up: 600, down: 700, left: 1130, right: 1208 },
//     };

//     // Classe TrafficLight (équivalent à trafficlight.py)
//     class TrafficLight {
//         constructor({ position, intersection, direction, greenDuration, yellowDuration, redDuration, initialState, rotation }) {
//             this.isActive = true;
//             this.intersection = intersection;
//             this.direction = direction;
//             this.position = position;
//             this.greenDuration = greenDuration;
//             this.yellowDuration = yellowDuration;
//             this.redDuration = redDuration;
//             this.state = initialState;
//             this.timer = 0;
//             this.stateDurations = {
//                 green: greenDuration,
//                 yellow: yellowDuration,
//                 red: redDuration,
//             };
//             this.rotation = rotation;
//         }

//         update() {
//             if (!this.isActive) return;
//             this.timer += 1;
//             if (this.timer >= this.stateDurations[this.state]) {
//                 this.timer = 0;
//                 if (this.state === "green") this.state = "yellow";
//                 else if (this.state === "yellow") this.state = "red";
//                 else if (this.state === "red") this.state = "green";
//             }
//         }
//     }

//     // Classe Vehicle (équivalent à vehicule.py)
//     // class Vehicle {
//     //     constructor(lane, vehicleType, direction, intersectionId, p) {
//     //         this.lane = lane;
//     //         this.vehicleType = vehicleType;
//     //         this.direction = direction;
//     //         this.intersectionId = intersectionId;
//     //         this.speed = 4;

//     //         // Positions de départ (comme dans votre vehicule.py)
//     //         this.lanePositions = {
//     //             a: { down: [[205, 14], [214, 10], [225, 10]], right: [[5, 280], [6, 265], [6, 250]] },
//     //             b: { down: [[669, 16], [675, 18], [691, 18]] },
//     //             c: { left: [[1388, 200], [1385, 210], [1381, 228]], down: [[1130, 15], [1140, 14], [1152, 14]] },
//     //             d: { up: [[1195, 789], [1170, 784], [1185, 785]], left: [[1378, 558], [1350, 570], [1377, 570]] },
//     //             e: { up: [[730, 784], [717, 785], [705, 785]] },
//     //             f: { up: [[268, 775], [255, 785], [240, 781]], right: [[17, 640], [14, 622], [11, 605]] },
//     //         };

//     //         const laneIndex = this.vehicleType === "bike" ? 0 : this.vehicleType === "bus" ? 1 : Math.floor(Math.random() * 2) + 1;
//     //         const pos = this.lanePositions[this.intersectionId][this.direction][laneIndex];
//     //         this.x = pos[0];
//     //         this.y = pos[1];

//     //         this.stop = stopLines[this.intersectionId][this.direction];
//     //         this.intersections = {
//     //             a: [235, 265],
//     //             b: [700, 265],
//     //             c: [1165, 265],
//     //             d: [235, 650],
//     //             e: [700, 650],
//     //             f: [1165, 650],
//     //         };
//     //         this.intersectionPos = this.intersections[this.intersectionId];
//     //         this.crossed = 0;
//     //         this.turned = 0;
//     //         this.willTurn = 0;
//     //         this.rotateAngle = 0;

//     //         // Charger l'image du véhicule
//     //         this.image = p.loadImage(`/images/${this.direction}/${this.vehicleType}.png`);
//     //     }

//     //     update() {
//     //         this.checkTrafficLights();
//     //         this.checkCollisions();
//     //         if (this.canMove()) this.move();
//     //         this.checkIntersection();
//     //     }

//     //     checkTrafficLights() {
//     //         for (let light of simulationState.current.trafficLights) {
//     //             if (light.intersection === this.intersectionId && light.direction === this.direction) {
//     //                 this.moving = light.state === "green"; // S'arrêter si le feu n'est pas vert
//     //                 break;
//     //             }
//     //         }
//     //     }

//     //     checkCollisions() {
//     //         for (let other of simulationState.current.vehicles) {
//     //             if (other !== this && other.direction === this.direction && other.lane === this.lane) {
//     //                 const distance = Math.sqrt((this.x - other.x) ** 2 + (this.y - other.y) ** 2);
//     //                 if (distance < GAP_VEHICLE[this.intersectionId][this.direction][this.vehicleType]) {
//     //                     this.moving = false;
//     //                     return;
//     //                 }
//     //             }
//     //         }
//     //         this.moving = true;
//     //     }

//     //     canMove() {
//     //         return this.moving !== undefined ? this.moving : true;
//     //     }

//     //     move() {
//     //         if (this.direction === "right") {
//     //             const distance = this.stop - this.x;
//     //             if (distance > GAP_TRAFFIC[this.intersectionId][this.direction][this.vehicleType]) {
//     //                 this.x += this.speed; // Avancer avant d'atteindre la ligne d'arrêt
//     //             } else if (distance <= GAP_TRAFFIC[this.intersectionId][this.direction][this.vehicleType] && this.canMove()) {
//     //                 this.x += this.speed; // Avancer uniquement si le feu est vert
//     //             }
//     //             if (this.x > this.stop && NEXT_INTERSECTION[this.direction][this.intersectionId]) {
//     //                 this.intersectionId = NEXT_INTERSECTION[this.direction][this.intersectionId];
//     //                 this.stop = stopLines[this.intersectionId][this.direction];
//     //                 this.intersectionPos = this.intersections[this.intersectionId];
//     //             }
//     //         } else if (this.direction === "left") {
//     //             const distance = this.x - this.stop;
//     //             if (distance > GAP_TRAFFIC[this.intersectionId][this.direction][this.vehicleType]) {
//     //                 this.x -= this.speed;
//     //             } else if (distance <= GAP_TRAFFIC[this.intersectionId][this.direction][this.vehicleType] && this.canMove()) {
//     //                 this.x -= this.speed;
//     //             }
//     //             if (this.x < this.stop && NEXT_INTERSECTION[this.direction][this.intersectionId]) {
//     //                 this.intersectionId = NEXT_INTERSECTION[this.direction][this.intersectionId];
//     //                 this.stop = stopLines[this.intersectionId][this.direction];
//     //                 this.intersectionPos = this.intersections[this.intersectionId];
//     //             }
//     //         } else if (this.direction === "down") {
//     //             const distance = this.stop - this.y;
//     //             if (distance > GAP_TRAFFIC[this.intersectionId][this.direction][this.vehicleType]) {
//     //                 this.y += this.speed;
//     //             } else if (distance <= GAP_TRAFFIC[this.intersectionId][this.direction][this.vehicleType] && this.canMove()) {
//     //                 this.y += this.speed;
//     //             }
//     //             if (this.y > this.stop && NEXT_INTERSECTION[this.direction][this.intersectionId]) {
//     //                 this.intersectionId = NEXT_INTERSECTION[this.direction][this.intersectionId];
//     //                 this.stop = stopLines[this.intersectionId][this.direction];
//     //                 this.intersectionPos = this.intersections[this.intersectionId];
//     //             }
//     //         } else if (this.direction === "up") {
//     //             const distance = this.y - this.stop;
//     //             if (distance > GAP_TRAFFIC[this.intersectionId][this.direction][this.vehicleType]) {
//     //                 this.y -= this.speed;
//     //             } else if (distance <= GAP_TRAFFIC[this.intersectionId][this.direction][this.vehicleType] && this.canMove()) {
//     //                 this.y -= this.speed;
//     //             }
//     //             if (this.y < this.stop && NEXT_INTERSECTION[this.direction][this.intersectionId]) {
//     //                 this.intersectionId = NEXT_INTERSECTION[this.direction][this.intersectionId];
//     //                 this.stop = stopLines[this.intersectionId][this.direction];
//     //                 this.intersectionPos = this.intersections[this.intersectionId];
//     //             }
//     //         }
//     //     }

//     //     checkIntersection() {
//     //         const distance = Math.sqrt((this.x - this.intersectionPos[0]) ** 2 + (this.y - this.intersectionPos[1]) ** 2);
//     //         if (distance < 30 && this.crossed === 0) {
//     //             this.crossed = 1;
//     //         }
//     //         if (distance < 30 && this.crossed === 1 && this.turned === 0) {
//     //             this.willTurn = Math.random() < 0.3 ? 1 : 0;
//     //             this.turned = 1;
//     //         }
//     //     }
//     // }

//     class Vehicle {
//         constructor(lane, vehicleType, direction, intersectionId, p) {
//             this.lane = lane;
//             this.vehicleType = vehicleType;
//             this.direction = direction;
//             this.intersectionId = intersectionId;
//             this.speed = 4;
//             this.moving = true;

//             // Positions de départ (comme dans votre vehicule.py)
//             this.lanePositions = {
//                 a: { down: [[205, 14], [214, 10], [225, 10]], right: [[5, 280], [6, 265], [6, 250]] },
//                 b: { down: [[669, 16], [675, 18], [691, 18]] },
//                 c: { left: [[1388, 200], [1385, 210], [1381, 228]], down: [[1130, 15], [1140, 14], [1152, 14]] },
//                 d: { up: [[1195, 789], [1170, 784], [1185, 785]], left: [[1378, 558], [1350, 570], [1377, 570]] },
//                 e: { up: [[730, 784], [717, 785], [705, 785]] },
//                 f: { up: [[268, 775], [255, 785], [240, 781]], right: [[17, 640], [14, 622], [11, 605]] },
//             };

//             const laneIndex = this.vehicleType === "bike" ? 0 : this.vehicleType === "bus" ? 1 : Math.floor(Math.random() * 2) + 1;
//             const pos = this.lanePositions[this.intersectionId][this.direction][laneIndex];
//             this.x = pos[0];
//             this.y = pos[1];

//             this.stop = stopLines[this.intersectionId][this.direction];
//             this.intersections = {
//                 a: [235, 265],
//                 b: [700, 265],
//                 c: [1165, 265],
//                 d: [235, 650],
//                 e: [700, 650],
//                 f: [1165, 650],
//             };
//             this.intersectionPos = this.intersections[this.intersectionId];
//             this.crossed = false;

//             // Charger l'image du véhicule
//             this.image = p.loadImage(`/images/${this.direction}/${this.vehicleType}.png`);
//         }

//         update() {
//             this.checkTrafficLights();
//             this.checkCollisions();
//             if (this.canMove()) this.move();
//             this.checkIntersection();
//         }

//         checkTrafficLights() {
//             for (let light of simulationState.current.trafficLights) {
//                 if (light.intersection === this.intersectionId && light.direction === this.direction) {
//                     const distanceToStopLine = this.direction === "right" ? this.stop - this.x :
//                         this.direction === "left" ? this.x - this.stop :
//                             this.direction === "down" ? this.stop - this.y :
//                                 this.y - this.stop;

//                     if (distanceToStopLine <= GAP_TRAFFIC[this.intersectionId][this.direction][this.vehicleType]) {
//                         this.moving = light.state === "green"; // Stop if the light is not green
//                     }
//                     break;
//                 }
//             }
//         }

//         checkCollisions() {
//             for (let other of simulationState.current.vehicles) {
//                 if (other !== this && other.direction === this.direction && other.lane === this.lane) {
//                     const distance = Math.sqrt((this.x - other.x) ** 2 + (this.y - other.y) ** 2);
//                     if (distance < GAP_VEHICLE[this.intersectionId][this.direction][this.vehicleType]) {
//                         this.moving = false; // Stop if too close to another vehicle
//                         return;
//                     }
//                 }
//             }
//             this.moving = true; // No collisions, allow movement
//         }

//         canMove() {
//             return this.moving !== undefined ? this.moving : true;
//         }

//         move() {
//             if (this.direction === "right") {
//                 this.x += this.speed;
//             } else if (this.direction === "left") {
//                 this.x -= this.speed;
//             } else if (this.direction === "down") {
//                 this.y += this.speed;
//             } else if (this.direction === "up") {
//                 this.y -= this.speed;
//             }
//         }

//         checkIntersection() {
//             const distance = Math.sqrt((this.x - this.intersectionPos[0]) ** 2 + (this.y - this.intersectionPos[1]) ** 2);
//             if (distance < 30 && !this.crossed) {
//                 this.crossed = true;

//                 // Update to the next intersection
//                 const nextIntersection = NEXT_INTERSECTION[this.direction][this.intersectionId];
//                 if (nextIntersection) {
//                     this.intersectionId = nextIntersection;
//                     this.stop = stopLines[this.intersectionId][this.direction];
//                     this.intersectionPos = this.intersections[this.intersectionId];
//                 }
//             }
//         }
//     }

//     // Initialisation des feux tricolores (comme dans simulation.py)
//     const initializeTrafficLights = () => {
//         const trafficLights = [];
//         // Intersection a
//         trafficLights.push(new TrafficLight({ position: [180, 160], intersection: "a", direction: "down", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: 180 }));
//         trafficLights.push(new TrafficLight({ position: [158, 300], intersection: "a", direction: "right", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "red", rotation: -90 }));
//         trafficLights.push(new TrafficLight({ position: [280, 175], intersection: "a", direction: "left", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: -90 }));
//         trafficLights.push(new TrafficLight({ position: [280, 300], intersection: "a", direction: "up", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: 0 }));
//         // Intersection b
//         trafficLights.push(new TrafficLight({ position: [640, 158], intersection: "b", direction: "down", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: 180 }));
//         trafficLights.push(new TrafficLight({ position: [740, 175], intersection: "b", direction: "left", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: 90 }));
//         trafficLights.push(new TrafficLight({ position: [620, 300], intersection: "b", direction: "right", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "red", rotation: -90 }));
//         trafficLights.push(new TrafficLight({ position: [745, 300], intersection: "b", direction: "up", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: 0 }));
//         // Intersection c
//         trafficLights.push(new TrafficLight({ position: [1105, 158], intersection: "c", direction: "down", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "red", rotation: 180 }));
//         trafficLights.push(new TrafficLight({ position: [1205, 175], intersection: "c", direction: "left", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: 90 }));
//         trafficLights.push(new TrafficLight({ position: [1085, 300], intersection: "c", direction: "right", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: -90 }));
//         trafficLights.push(new TrafficLight({ position: [1220, 300], intersection: "c", direction: "up", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: 0 }));
//         // Intersection d
//         trafficLights.push(new TrafficLight({ position: [1105, 515], intersection: "d", direction: "down", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: 180 }));
//         trafficLights.push(new TrafficLight({ position: [1210, 530], intersection: "d", direction: "left", redDuration: 80, yellowDuration: 50, greenDuration: 80, initialState: "red", rotation: 90 }));
//         trafficLights.push(new TrafficLight({ position: [1085, 650], intersection: "d", direction: "right", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: -90 }));
//         trafficLights.push(new TrafficLight({ position: [1210, 650], intersection: "d", direction: "up", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "red", rotation: 0 }));
//         // Intersection e
//         trafficLights.push(new TrafficLight({ position: [645, 515], intersection: "e", direction: "down", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: 180 }));
//         trafficLights.push(new TrafficLight({ position: [745, 535], intersection: "e", direction: "left", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: 90 }));
//         trafficLights.push(new TrafficLight({ position: [620, 650], intersection: "e", direction: "right", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "red", rotation: -90 }));
//         trafficLights.push(new TrafficLight({ position: [745, 650], intersection: "e", direction: "up", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: 0 }));
//         // Intersection f
//         trafficLights.push(new TrafficLight({ position: [180, 515], intersection: "f", direction: "down", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: -180 }));
//         trafficLights.push(new TrafficLight({ position: [280, 540], intersection: "f", direction: "left", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: 90 }));
//         trafficLights.push(new TrafficLight({ position: [158, 655], intersection: "f", direction: "right", redDuration: 800, yellowDuration: 50, greenDuration: 100, initialState: "red", rotation: -90 }));
//         trafficLights.push(new TrafficLight({ position: [280, 650], intersection: "f", direction: "up", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "red", rotation: 0 }));

//         simulationState.current.trafficLights = trafficLights;
//     };

//     // Fonction pour compter les véhicules en attente à une intersection pour une direction donnée
//     const countWaitingVehicles = (intersectionId, direction) => {
//         const stop = stopLines[intersectionId][direction];
//         return simulationState.current.vehicles.filter(vehicle => {
//             if (vehicle.intersectionId !== intersectionId || vehicle.direction !== direction) return false;
//             if (direction === "right") return vehicle.x <= stop && vehicle.x > stop - 50;
//             if (direction === "left") return vehicle.x >= stop && vehicle.x < stop + 50;
//             if (direction === "down") return vehicle.y <= stop && vehicle.y > stop - 50;
//             if (direction === "up") return vehicle.y >= stop && vehicle.y < stop + 50;
//             return false;
//         }).length;
//     };

//     // Fonction pour calculer la densité de flux à une intersection
//     const calculateFlowDensity = (intersectionId) => {
//         const directions = ["right", "left", "down", "up"];
//         let totalFlow = 0;
//         directions.forEach(direction => {
//             if (stopLines[intersectionId][direction] !== undefined) {
//                 totalFlow += countWaitingVehicles(intersectionId, direction);
//             }
//         });
//         return totalFlow;
//     };

//     // Fonction pour ajuster les feux en fonction de la densité
//     const adjustTrafficLights = () => {
//         const intersections = ["a", "b", "c", "d", "e", "f"];
//         intersections.forEach(intersectionId => {
//             const lights = simulationState.current.trafficLights.filter(light => light.intersection === intersectionId);
//             if (lights.some(light => !light.isActive)) return; // Ne rien faire si l'intersection est désactivée

//             // Compter les véhicules en attente pour chaque direction
//             const directions = ["right", "left", "down", "up"];
//             const waitingVehicles = {};
//             directions.forEach(direction => {
//                 if (stopLines[intersectionId][direction] !== undefined) {
//                     waitingVehicles[direction] = countWaitingVehicles(intersectionId, direction);
//                 }
//             });

//             // Calculer la densité de flux aux intersections voisines
//             const neighborFlow = {};
//             directions.forEach(direction => {
//                 const nextIntersection = NEXT_INTERSECTION[direction][intersectionId];
//                 if (nextIntersection) {
//                     neighborFlow[direction] = calculateFlowDensity(nextIntersection);
//                 } else {
//                     neighborFlow[direction] = 0;
//                 }
//             });

//             // Trouver la direction avec le plus de véhicules en attente, ajustée par la densité des voisins
//             let maxDirection = null;
//             let maxScore = -Infinity;
//             directions.forEach(direction => {
//                 if (waitingVehicles[direction] !== undefined) {
//                     const score = waitingVehicles[direction] - 0.5 * neighborFlow[direction]; // Ajustement basé sur les voisins
//                     if (score > maxScore) {
//                         maxScore = score;
//                         maxDirection = direction;
//                     }
//                 }
//             });

//             // Mettre à jour les feux : vert pour la direction prioritaire, rouge pour les autres
//             lights.forEach(light => {
//                 if (light.state === "red" && light.timer >= light.stateDurations.red) {
//                     if (light.direction === maxDirection) {
//                         light.state = "green";
//                         light.timer = 0;
//                     } else {
//                         light.state = "red";
//                         light.timer = 0;
//                     }
//                 }
//             });
//         });
//     };

//     // Fonction pour générer un véhicule
//     const spawnVehicle = (p) => {
//         const vehicleTypes = ["bike", "bus", "car", "rickshaw", "truck"];
//         const spawnPoints = [
//             { direction: "right", lane: 1, intersectionId: "a" },
//             { direction: "right", lane: 1, intersectionId: "f" },
//             { direction: "left", lane: 1, intersectionId: "c" },
//             { direction: "left", lane: 1, intersectionId: "d" },
//             { direction: "up", lane: 1, intersectionId: "d" },
//             { direction: "up", lane: 1, intersectionId: "e" },
//             { direction: "up", lane: 1, intersectionId: "f" },
//             { direction: "down", lane: 1, intersectionId: "a" },
//             { direction: "down", lane: 1, intersectionId: "b" },
//             { direction: "down", lane: 1, intersectionId: "c" },
//         ];

//         // Filtrer les spawnPoints pour exclure les intersections désactivées
//         const activeSpawnPoints = spawnPoints.filter(spawn => {
//             const lights = simulationState.current.trafficLights.filter(light => light.intersection === spawn.intersectionId);
//             return lights.some(light => light.isActive);
//         });

//         if (activeSpawnPoints.length === 0) return; // Ne rien faire si aucune intersection n'est active

//         const spawn = activeSpawnPoints[Math.floor(Math.random() * activeSpawnPoints.length)];
//         const vehicleType = vehicleTypes[Math.floor(Math.random() * vehicleTypes.length)];
//         const vehicle = new Vehicle(spawn.lane, vehicleType, spawn.direction, spawn.intersectionId, p);
//         simulationState.current.vehicles.push(vehicle);
//     };

//     // Sketch p5.js
//     useEffect(() => {
//         const sketch = (p) => {
//             let backgroundImg, redSignal, yellowSignal, greenSignal;

//             p.preload = () => {
//                 backgroundImg = p.loadImage('/images/bgNew.png');
//                 redSignal = p.loadImage('/images/signals/red.png');
//                 yellowSignal = p.loadImage('/images/signals/yellow.png');
//                 greenSignal = p.loadImage('/images/signals/green.png');
//             };

//             p.setup = () => {
//                 p.createCanvas(WIDTH, HEIGHT);
//                 p.frameRate(FPS);
//                 initializeTrafficLights();
//             };

//             p.draw = () => {
//                 p.image(backgroundImg, 0, 0, WIDTH, HEIGHT);

//                 // Ajuster les feux en fonction de la densité
//                 adjustTrafficLights();

//                 // Mettre à jour et dessiner les feux tricolores
//                 simulationState.current.trafficLights.forEach(light => {
//                     light.update();
//                     if (light.isActive) {
//                         let signalImg;
//                         if (light.state === "red") signalImg = redSignal;
//                         else if (light.state === "yellow") signalImg = yellowSignal;
//                         else if (light.state === "green") signalImg = greenSignal;
//                         p.push();
//                         p.translate(light.position[0], light.position[1]);
//                         p.rotate(p.radians(light.rotation));
//                         p.image(signalImg, -10, -20, 20, 40);
//                         p.pop();
//                     }
//                 });

//                 // Mettre à jour et dessiner les véhicules
//                 simulationState.current.vehicles.forEach(vehicle => {
//                     vehicle.update();
//                     p.image(vehicle.image, vehicle.x, vehicle.y);
//                 });

//                 // Supprimer les véhicules hors de l'écran
//                 simulationState.current.vehicles = simulationState.current.vehicles.filter(
//                     vehicle => vehicle.x >= 0 && vehicle.x <= WIDTH && vehicle.y >= 0 && vehicle.y <= HEIGHT
//                 );

//                 // Générer de nouveaux véhicules en fonction de la densité
//                 const vehiclesPerFrame = simulationState.current.vehiclesToSpawnPerFrame;
//                 const numVehiclesToSpawn = Math.floor(vehiclesPerFrame);
//                 const remainder = vehiclesPerFrame - numVehiclesToSpawn;
//                 simulationState.current.vehicleSpawnTimer += remainder;

//                 for (let i = 0; i < numVehiclesToSpawn; i++) {
//                     spawnVehicle(p);
//                 }
//                 if (simulationState.current.vehicleSpawnTimer >= 1) {
//                     spawnVehicle(p);
//                     simulationState.current.vehicleSpawnTimer -= 1;
//                 }
//             };
//         };

//         const p5Instance = new p5(sketch, sketchRef.current);
//         return () => p5Instance.remove();
//     }, []);

//     // Mettre à jour le nombre de véhicules à générer par frame en fonction de la densité
//     useEffect(() => {
//         // trafficDensity est le nombre de véhicules par seconde
//         // On calcule le nombre de véhicules par frame (à 60 FPS)
//         simulationState.current.vehiclesToSpawnPerFrame = trafficDensity / FPS;
//     }, [trafficDensity]);

//     // Fonctions pour interagir avec la simulation
//     const toggleIntersection = (intersectionId, enable) => {
//         simulationState.current.trafficLights.forEach(light => {
//             if (light.intersection === intersectionId) {
//                 light.isActive = enable;
//             }
//         });
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
//             <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
//                 <div ref={sketchRef} className="mx-auto"></div>
//             </div>

//             <div className="w-full max-w-md">
//                 <h2 className="text-2xl font-semibold text-gray-700 mb-4">Controls</h2>
//                 <div className="grid grid-cols-2 gap-4">
//                     {['a', 'b', 'c', 'd', 'e', 'f'].map(intersection => (
//                         <div key={intersection} className="flex flex-col items-center space-y-2">
//                             <h3 className="text-lg font-medium text-gray-600">Intersection {intersection.toUpperCase()}</h3>
//                             <div className="flex space-x-2">
//                                 <button
//                                     onClick={() => toggleIntersection(intersection, false)}
//                                     className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
//                                 >
//                                     Disable
//                                 </button>
//                                 <button
//                                     onClick={() => toggleIntersection(intersection, true)}
//                                     className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
//                                 >
//                                     Enable
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="mt-6">
//                     <h3 className="text-lg font-medium text-gray-600 mb-2">Traffic Density (vehicles per second)</h3>
//                     <input
//                         type="range"
//                         min="0"
//                         max="10"
//                         step="0.1"
//                         value={trafficDensity}
//                         onChange={(e) => setTrafficDensity(Number(e.target.value))}
//                         className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
//                     />
//                     <div className="flex justify-between text-sm text-gray-500 mt-1">
//                         <span>0</span>
//                         <span>{trafficDensity.toFixed(1)}</span>
//                         <span>10</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TrafficSimulation;

/////////////

'use client'

import { useEffect, useRef, useState } from 'react';
import p5 from 'p5';

const TrafficSimulation = () => {
    const sketchRef = useRef();
    const [trafficDensity, setTrafficDensity] = useState(1); // Nombre de véhicules par seconde (1 par défaut)
    const simulationState = useRef({
        vehicles: [],
        trafficLights: [],
        vehicleSpawnTimer: 0,
        vehiclesToSpawnPerFrame: 0, // Nombre de véhicules à générer par frame
    });

    // Constantes (équivalent à settings.py)
    const WIDTH = 1400;
    const HEIGHT = 800;
    const FPS = 60; // Ajusté à 60 FPS pour une simulation plus fluide
    const GAP_TRAFFIC = {
        a: {
            right: { bus: 10, bike: 10, car: 9, rickshaw: 10, truck: 5 },
            left: { bus: 50, bike: 35, car: 30, rickshaw: 35, truck: 35 },
            down: { bus: 10, bike: 10, car: 10, rickshaw: 10, truck: 10 },
            up: { bus: 50, bike: 44, car: 60, rickshaw: 50, truck: 40 },
        },
        b: {
            right: { bus: 83, bike: 44, car: 60, rickshaw: 50, truck: 70 },
            left: { bus: 50, bike: 35, car: 30, rickshaw: 35, truck: 35 },
            down: { bus: 10, bike: 10, car: 10, rickshaw: 10, truck: 10 },
            up: { bus: 50, bike: 44, car: 60, rickshaw: 50, truck: 40 },
        },
        c: {
            right: { bus: 83, bike: 44, car: 60, rickshaw: 50, truck: 70 },
            left: { bus: 50, bike: 35, car: 30, rickshaw: 35, truck: 35 },
            down: { bus: 10, bike: 10, car: 10, rickshaw: 10, truck: 10 },
            up: { bus: 50, bike: 44, car: 60, rickshaw: 50, truck: 40 },
        },
        d: {
            right: { bus: 83, bike: 44, car: 60, rickshaw: 50, truck: 70 },
            left: { bus: 50, bike: 35, car: 30, rickshaw: 35, truck: 35 },
            down: { bus: 10, bike: 10, car: 10, rickshaw: 10, truck: 10 },
            up: { bus: 50, bike: 25, car: 35, rickshaw: 28, truck: 40 },
        },
        e: {
            right: { bus: 83, bike: 44, car: 60, rickshaw: 50, truck: 70 },
            left: { bus: 50, bike: 35, car: 30, rickshaw: 35, truck: 35 },
            down: { bus: 10, bike: 10, car: 10, rickshaw: 10, truck: 10 },
            up: { bus: 50, bike: 44, car: 60, rickshaw: 28, truck: 40 },
        },
        f: {
            right: { bus: 83, bike: 44, car: 60, rickshaw: 50, truck: 70 },
            left: { bus: 50, bike: 35, car: 30, rickshaw: 35, truck: 35 },
            down: { bus: 10, bike: 10, car: 10, rickshaw: 10, truck: 10 },
            up: { bus: 50, bike: 44, car: 60, rickshaw: 80, truck: 40 },
        },
    };
    const GAP_VEHICLE = {
        a: {
            right: { bus: 15, bike: 12, car: 15, rickshaw: 20, truck: 15 },
            down: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 15 },
            left: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 70 },
            up: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 70 },
        },
        b: {
            right: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 20 },
            down: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 15 },
            left: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 70 },
            up: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 70 },
        },
        c: {
            right: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 20 },
            down: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 15 },
            left: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 70 },
            up: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 70 },
        },
        d: {
            right: { bus: 20, bike: 12, car: 16, rickshaw: 10, truck: 20 },
            down: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 15 },
            left: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 70 },
            up: { bus: 83, bike: 43, car: 55, rickshaw: 50, truck: 70 },
        },
        e: {
            right: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 20 },
            down: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 15 },
            left: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 70 },
            up: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 70 },
        },
        f: {
            right: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 20 },
            down: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 15 },
            left: { bus: 20, bike: 12, car: 16, rickshaw: 20, truck: 70 },
            up: { bus: 20, bike: 12, car: 16, rickshaw: 60, truck: 70 },
        },
    };
    const NEXT_INTERSECTION = {
        right: { a: "b", b: "c", c: null, f: "e", e: "d", d: null },
        left: { c: "b", b: "a", a: null, d: "e", e: "f", f: null },
        down: { c: "d", d: null, b: "e", e: null, a: "f", f: null },
        up: { d: "c", c: null, e: "b", b: null, f: "a", a: null },
    };
    const stopLines = {
        a: { up: 218, down: 313, left: 198, right: 275 },
        b: { up: 218, down: 313, left: 666, right: 742 },  // Corrigé right: 255 -> 742
        c: { up: 218, down: 313, left: 1130, right: 1208 },
        d: { up: 600, down: 700, left: 198, right: 275 },
        e: { up: 600, down: 700, left: 666, right: 742 },
        f: { up: 600, down: 700, left: 1130, right: 1208 },
    };

    // Classe TrafficLight
    class TrafficLight {
        constructor({ position, intersection, direction, greenDuration, yellowDuration, redDuration, initialState, rotation }) {
            this.isActive = true;
            this.intersection = intersection;
            this.direction = direction;
            this.position = position;
            this.greenDuration = greenDuration;
            this.yellowDuration = yellowDuration;
            this.redDuration = redDuration;
            this.state = initialState;
            this.timer = 0;
            this.stateDurations = {
                green: greenDuration,
                yellow: yellowDuration,
                red: redDuration,
            };
            this.rotation = rotation;
        }

        update() {
            if (!this.isActive) return;
            this.timer += 1;
            if (this.timer >= this.stateDurations[this.state]) {
                this.timer = 0;
                if (this.state === "green") this.state = "yellow";
                else if (this.state === "yellow") this.state = "red";
                else if (this.state === "red") this.state = "green";
            }
        }
    }

    // Classe Vehicle améliorée
    class Vehicle {
        constructor(lane, vehicleType, direction, intersectionId, p) {
            this.lane = lane;
            this.vehicleType = vehicleType;
            this.direction = direction;
            this.intersectionId = intersectionId;
            this.speed = 4;
            this.moving = true;
            this.hasPassedStopLine = false;
            this.passedIntersections = new Set();

            // Positions de départ
            this.lanePositions = {
                a: { down: [[205, 14], [214, 10], [225, 10]], right: [[5, 280], [6, 265], [6, 250]] },
                b: { down: [[669, 16], [675, 18], [691, 18]] },
                c: { left: [[1388, 200], [1385, 210], [1381, 228]], down: [[1130, 15], [1140, 14], [1152, 14]] },
                d: { up: [[1195, 789], [1170, 784], [1185, 785]], left: [[1378, 558], [1350, 570], [1377, 570]] },
                e: { up: [[730, 784], [717, 785], [705, 785]] },
                f: { up: [[268, 775], [255, 785], [240, 781]], right: [[17, 640], [14, 622], [11, 605]] },
            };

            const laneIndex = this.vehicleType === "bike" ? 0 : this.vehicleType === "bus" ? 1 : Math.floor(Math.random() * 2) + 1;
            const pos = this.lanePositions[this.intersectionId][this.direction][laneIndex];
            this.x = pos[0];
            this.y = pos[1];

            this.stopLine = stopLines[this.intersectionId][this.direction];
            this.intersections = {
                a: [235, 265],
                b: [700, 265],
                c: [1165, 265],
                d: [235, 650],
                e: [700, 650],
                f: [1165, 650],
            };
            this.intersectionPos = this.intersections[this.intersectionId];
            this.atIntersection = false;

            // Charger l'image du véhicule
            this.image = p.loadImage(`/images/${this.direction}/${this.vehicleType}.png`);
        }

        update() {
            this.checkTrafficLights();
            this.checkCollisions();
            if (this.canMove()) {
                this.move();
            }
            this.checkIntersection();
        }

        // Vérifie le feu de circulation pertinent pour ce véhicule
        checkTrafficLights() {
            if (this.hasPassedStopLine) {
                // Si le véhicule a déjà passé le feu, il peut continuer à avancer
                return;
            }

            // Récupérer le feu correspondant à l'intersection et à la direction du véhicule
            const relevantLight = simulationState.current.trafficLights.find(
                light => light.intersection === this.intersectionId && light.direction === this.direction
            );

            if (!relevantLight || !relevantLight.isActive) return;

            const distanceToStopLine = this.getDistanceToStopLine();

            // Vérifier si le véhicule est à proximité du feu et si le feu n'est pas vert
            if (distanceToStopLine <= GAP_TRAFFIC[this.intersectionId][this.direction][this.vehicleType]) {
                this.moving = relevantLight.state === "green";

                // Si le véhicule est exactement à la ligne d'arrêt et que le feu est vert, marquer qu'il a passé le feu
                if (this.isAtStopLine() && relevantLight.state === "green") {
                    this.hasPassedStopLine = true;
                }
            }
        }

        // Vérifie les collisions avec d'autres véhicules
        checkCollisions() {
            if (!this.moving) return; // Si déjà arrêté, pas besoin de vérifier les collisions

            for (let other of simulationState.current.vehicles) {
                if (other === this || other.direction !== this.direction) continue;

                // Pour les véhicules dans la même direction, vérifier s'ils sont trop proches
                if (this.direction === other.direction) {
                    const distance = this.getDistanceTo(other);

                    // Si le véhicule devant est arrêté ou trop proche
                    if (this.isAhead(other) && distance < GAP_VEHICLE[this.intersectionId][this.direction][this.vehicleType]) {
                        this.moving = false;
                        return;
                    }
                }
            }
        }

        // Vérifie si un autre véhicule est devant celui-ci
        isAhead(other) {
            if (this.direction === "right") {
                return other.x > this.x;
            } else if (this.direction === "left") {
                return other.x < this.x;
            } else if (this.direction === "down") {
                return other.y > this.y;
            } else if (this.direction === "up") {
                return other.y < this.y;
            }
            return false;
        }

        // Obtient la distance entre ce véhicule et un autre
        getDistanceTo(other) {
            return Math.sqrt((this.x - other.x) ** 2 + (this.y - other.y) ** 2);
        }

        // Obtient la distance à la ligne d'arrêt
        getDistanceToStopLine() {
            if (this.direction === "right") {
                return this.stopLine - this.x;
            } else if (this.direction === "left") {
                return this.x - this.stopLine;
            } else if (this.direction === "down") {
                return this.stopLine - this.y;
            } else if (this.direction === "up") {
                return this.y - this.stopLine;
            }
            return Infinity;
        }

        // Vérifie si le véhicule est précisément à la ligne d'arrêt
        isAtStopLine() {
            const tolerance = 5; // Marge d'erreur en pixels
            const distance = this.getDistanceToStopLine();
            return Math.abs(distance) < tolerance;
        }

        // Vérifie si le véhicule peut se déplacer
        canMove() {
            return this.moving;
        }

        // Déplace le véhicule
        move() {
            if (this.direction === "right") {
                this.x += this.speed;
            } else if (this.direction === "left") {
                this.x -= this.speed;
            } else if (this.direction === "down") {
                this.y += this.speed;
            } else if (this.direction === "up") {
                this.y -= this.speed;
            }
        }

        // Vérifie si le véhicule a atteint une intersection et met à jour son état
        checkIntersection() {
            // Distance du véhicule au centre de l'intersection
            const distance = Math.sqrt(
                (this.x - this.intersectionPos[0]) ** 2 +
                (this.y - this.intersectionPos[1]) ** 2
            );

            // Si le véhicule a atteint une intersection
            if (distance < 30 && !this.atIntersection) {
                this.atIntersection = true;
                this.passedIntersections.add(this.intersectionId);

                // Trouver la prochaine intersection dans cette direction
                const nextIntersection = NEXT_INTERSECTION[this.direction][this.intersectionId];

                if (nextIntersection) {
                    // Mettre à jour l'intersection actuelle et la ligne d'arrêt
                    this.intersectionId = nextIntersection;
                    this.stopLine = stopLines[this.intersectionId][this.direction];
                    this.intersectionPos = this.intersections[this.intersectionId];
                    this.hasPassedStopLine = false; // Réinitialiser pour le prochain feu
                }
            }
            // Si le véhicule s'éloigne de l'intersection
            else if (distance > 50 && this.atIntersection) {
                this.atIntersection = false;
            }
        }
    }


    // class Vehicle {
    //     constructor(lane, vehicleType, direction, intersectionId, p) {
    //         // ... (unchanged constructor)
    //         this.speed = 2; // Reduced from 4 to 2 for smoother stopping
    //     }

    //     // Optimized: Ensure precise stopping at stop_line for red/yellow, start on green
    //     checkTrafficLights() {
    //         if (this.hasPassedStopLine || this.passedIntersections.has(this.intersectionId)) {
    //             this.moving = true; // Ignore light if stop_line is passed or intersection is crossed
    //             return;
    //         }

    //         const relevantLight = simulationState.current.trafficLights.find(
    //             (light) =>
    //                 light.intersection === this.intersectionId &&
    //                 light.direction === this.direction &&
    //                 light.isActive
    //         );

    //         if (!relevantLight) {
    //             this.moving = true; // No active light, keep moving
    //             return;
    //         }

    //         const distanceToStopLine = this.getDistanceToStopLine();
    //         const gapTraffic = GAP_TRAFFIC[this.intersectionId][this.direction][this.vehicleType];

    //         if (distanceToStopLine <= gapTraffic + 10) { // Slightly larger threshold to catch vehicles approaching
    //             if (relevantLight.state === "red" || relevantLight.state === "yellow") {
    //                 this.moving = false;
    //                 // Snap lead vehicle to exact stop_line - GAP_TRAFFIC
    //                 if (distanceToStopLine <= gapTraffic + 2) { // Close enough to snap
    //                     if (this.direction === "right") {
    //                         this.x = this.stopLine - gapTraffic;
    //                     } else if (this.direction === "left") {
    //                         this.x = this.stopLine + gapTraffic;
    //                     } else if (this.direction === "down") {
    //                         this.y = this.stopLine - gapTraffic;
    //                     } else if (this.direction === "up") {
    //                         this.y = this.stopLine + gapTraffic;
    //                     }
    //                 }
    //             } else if (relevantLight.state === "green") {
    //                 this.moving = true;
    //                 if (distanceToStopLine <= gapTraffic) {
    //                     this.hasPassedStopLine = true; // Mark as passed when close enough
    //                 }
    //             }
    //         } else {
    //             this.moving = true; // Far from stop_line, keep moving
    //         }
    //     }

    //     // Optimized: Align following vehicles with GAP_VEHICLE
    //     checkCollisions() {
    //         if (!this.moving) return; // Already stopped, no need to check

    //         for (let other of simulationState.current.vehicles) {
    //             if (other === this || other.direction !== this.direction || other.intersectionId !== this.intersectionId) {
    //                 continue;
    //             }

    //             const distance = this.getDistanceTo(other);
    //             const gapVehicle = GAP_VEHICLE[this.intersectionId][this.direction][this.vehicleType];

    //             if (this.isAhead(other) && distance < gapVehicle) {
    //                 this.moving = false;
    //                 // Snap to exact GAP_VEHICLE behind the other vehicle
    //                 if (distance < gapVehicle - 2) { // Close enough to adjust position
    //                     if (this.direction === "right") {
    //                         this.x = other.x - gapVehicle;
    //                     } else if (this.direction === "left") {
    //                         this.x = other.x + gapVehicle;
    //                     } else if (this.direction === "down") {
    //                         this.y = other.y - gapVehicle;
    //                     } else if (this.direction === "up") {
    //                         this.y = other.y + gapVehicle;
    //                     }
    //                 }
    //                 break; // Stop checking once we find a vehicle ahead
    //             }
    //         }
    //     }

    //     // Optimized: Consistent distance calculation
    //     getDistanceToStopLine() {
    //         if (this.direction === "right") {
    //             return this.stopLine - this.x;
    //         } else if (this.direction === "left") {
    //             return this.x - this.stopLine;
    //         } else if (this.direction === "down") {
    //             return this.stopLine - this.y;
    //         } else if (this.direction === "up") {
    //             return this.y - this.stopLine;
    //         }
    //         return Infinity;
    //     }

    //     // Optimized: Tighter tolerance for precision
    //     isAtStopLine() {
    //         const tolerance = 2; // Reduced from 5 for precision
    //         const distance = this.getDistanceToStopLine();
    //         return Math.abs(distance) <= tolerance;
    //     }

    //     // Optimized: Ensure light reassignment after crossing
    //     checkIntersection() {
    //         const distance = Math.sqrt(
    //             (this.x - this.intersectionPos[0]) ** 2 +
    //             (this.y - this.intersectionPos[1]) ** 2
    //         );

    //         if (distance < 30 && !this.atIntersection) {
    //             this.atIntersection = true;
    //             this.passedIntersections.add(this.intersectionId);

    //             const nextIntersection = NEXT_INTERSECTION[this.direction][this.intersectionId];
    //             if (nextIntersection) {
    //                 this.intersectionId = nextIntersection;
    //                 this.stopLine = stopLines[this.intersectionId][this.direction];
    //                 this.intersectionPos = this.intersections[this.intersectionId];
    //                 this.hasPassedStopLine = false;
    //                 this.moving = true; // Ensure vehicle moves after crossing
    //             }
    //         } else if (distance > 50 && this.atIntersection) {
    //             this.atIntersection = false;
    //         }
    //     }

    //     // Optimized: Smoother movement
    //     move() {
    //         if (!this.moving) return;
    //         if (this.direction === "right") {
    //             this.x += this.speed;
    //         } else if (this.direction === "left") {
    //             this.x -= this.speed;
    //         } else if (this.direction === "down") {
    //             this.y += this.speed;
    //         } else if (this.direction === "up") {
    //             this.y -= this.speed;
    //         }
    //     }

    //     // Vérifie si le véhicule a atteint une intersection et met à jour son état
    //     checkIntersection() {
    //         // Distance du véhicule au centre de l'intersection
    //         const distance = Math.sqrt(
    //             (this.x - this.intersectionPos[0]) ** 2 +
    //             (this.y - this.intersectionPos[1]) ** 2
    //         );

    //         // Si le véhicule a atteint une intersection
    //         if (distance < 30 && !this.atIntersection) {
    //             this.atIntersection = true;
    //             this.passedIntersections.add(this.intersectionId);

    //             // Trouver la prochaine intersection dans cette direction
    //             const nextIntersection = NEXT_INTERSECTION[this.direction][this.intersectionId];

    //             if (nextIntersection) {
    //                 // Mettre à jour l'intersection actuelle et la ligne d'arrêt
    //                 this.intersectionId = nextIntersection;
    //                 this.stopLine = stopLines[this.intersectionId][this.direction];
    //                 this.intersectionPos = this.intersections[this.intersectionId];
    //                 this.hasPassedStopLine = false; // Réinitialiser pour le prochain feu
    //             }
    //         }
    //         // Si le véhicule s'éloigne de l'intersection
    //         else if (distance > 50 && this.atIntersection) {
    //             this.atIntersection = false;
    //         }
    //     }

    // }

    // Initialisation des feux tricolores
    const initializeTrafficLights = () => {
        const trafficLights = [];
        // Intersection a
        trafficLights.push(new TrafficLight({ position: [180, 160], intersection: "a", direction: "down", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: 180 }));
        trafficLights.push(new TrafficLight({ position: [158, 300], intersection: "a", direction: "right", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "red", rotation: -90 }));
        trafficLights.push(new TrafficLight({ position: [280, 175], intersection: "a", direction: "left", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: -90 }));
        trafficLights.push(new TrafficLight({ position: [280, 300], intersection: "a", direction: "up", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: 0 }));
        // Intersection b
        trafficLights.push(new TrafficLight({ position: [640, 158], intersection: "b", direction: "down", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: 180 }));
        trafficLights.push(new TrafficLight({ position: [740, 175], intersection: "b", direction: "left", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: 90 }));
        trafficLights.push(new TrafficLight({ position: [620, 300], intersection: "b", direction: "right", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "red", rotation: -90 }));
        trafficLights.push(new TrafficLight({ position: [745, 300], intersection: "b", direction: "up", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: 0 }));
        // Intersection c
        trafficLights.push(new TrafficLight({ position: [1105, 158], intersection: "c", direction: "down", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "red", rotation: 180 }));
        trafficLights.push(new TrafficLight({ position: [1205, 175], intersection: "c", direction: "left", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: 90 }));
        trafficLights.push(new TrafficLight({ position: [1085, 300], intersection: "c", direction: "right", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: -90 }));
        trafficLights.push(new TrafficLight({ position: [1220, 300], intersection: "c", direction: "up", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: 0 }));
        // Intersection d
        trafficLights.push(new TrafficLight({ position: [1105, 515], intersection: "d", direction: "down", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: 180 }));
        trafficLights.push(new TrafficLight({ position: [1210, 530], intersection: "d", direction: "left", redDuration: 80, yellowDuration: 50, greenDuration: 80, initialState: "red", rotation: 90 }));
        trafficLights.push(new TrafficLight({ position: [1085, 650], intersection: "d", direction: "right", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: -90 }));
        trafficLights.push(new TrafficLight({ position: [1210, 650], intersection: "d", direction: "up", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "red", rotation: 0 }));
        // Intersection e
        trafficLights.push(new TrafficLight({ position: [645, 515], intersection: "e", direction: "down", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: 180 }));
        trafficLights.push(new TrafficLight({ position: [745, 535], intersection: "e", direction: "left", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: 90 }));
        trafficLights.push(new TrafficLight({ position: [620, 650], intersection: "e", direction: "right", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "red", rotation: -90 }));
        trafficLights.push(new TrafficLight({ position: [745, 650], intersection: "e", direction: "up", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: 0 }));
        // Intersection f
        trafficLights.push(new TrafficLight({ position: [180, 515], intersection: "f", direction: "down", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: -180 }));
        trafficLights.push(new TrafficLight({ position: [280, 540], intersection: "f", direction: "left", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "green", rotation: 90 }));
        trafficLights.push(new TrafficLight({ position: [158, 655], intersection: "f", direction: "right", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "red", rotation: -90 }));
        trafficLights.push(new TrafficLight({ position: [280, 650], intersection: "f", direction: "up", redDuration: 80, yellowDuration: 50, greenDuration: 100, initialState: "red", rotation: 0 }));

        simulationState.current.trafficLights = trafficLights;
    };

    // Fonction pour compter les véhicules en attente à une intersection pour une direction donnée
    const countWaitingVehicles = (intersectionId, direction) => {
        const stopLine = stopLines[intersectionId][direction];

        return simulationState.current.vehicles.filter(vehicle => {
            if (vehicle.intersectionId !== intersectionId || vehicle.direction !== direction) return false;

            // Distance du véhicule à la ligne d'arrêt
            let distanceToStopLine;
            if (direction === "right") {
                distanceToStopLine = stopLine - vehicle.x;
                return distanceToStopLine > 0 && distanceToStopLine < 100; // Véhicules à moins de 100px de la ligne d'arrêt
            } else if (direction === "left") {
                distanceToStopLine = vehicle.x - stopLine;
                return distanceToStopLine > 0 && distanceToStopLine < 100;
            } else if (direction === "down") {
                distanceToStopLine = stopLine - vehicle.y;
                return distanceToStopLine > 0 && distanceToStopLine < 100;
            } else if (direction === "up") {
                distanceToStopLine = vehicle.y - stopLine;
                return distanceToStopLine > 0 && distanceToStopLine < 100;
            }
            return false;
        }).length;
    };

    // Fonction pour calculer la densité de flux à une intersection
    const calculateFlowDensity = (intersectionId) => {
        const directions = ["right", "left", "down", "up"];
        let totalFlow = 0;
        directions.forEach(direction => {
            if (stopLines[intersectionId][direction] !== undefined) {
                totalFlow += countWaitingVehicles(intersectionId, direction);
            }
        });
        return totalFlow;
    };

    // Fonction pour ajuster les feux en fonction de la densité
    const adjustTrafficLights = () => {
        const intersections = ["a", "b", "c", "d", "e", "f"];

        intersections.forEach(intersectionId => {
            const lights = simulationState.current.trafficLights.filter(light => light.intersection === intersectionId);
            if (lights.some(light => !light.isActive)) return; // Ne rien faire si l'intersection est désactivée

            // Compter les véhicules en attente pour chaque direction
            const directions = ["right", "left", "down", "up"];
            const waitingVehicles = {};
            directions.forEach(direction => {
                if (stopLines[intersectionId][direction] !== undefined) {
                    waitingVehicles[direction] = countWaitingVehicles(intersectionId, direction);
                }
            });

            // Calculer la densité de flux aux intersections voisines
            const neighborFlow = {};
            directions.forEach(direction => {
                const nextIntersection = NEXT_INTERSECTION[direction][intersectionId];
                if (nextIntersection) {
                    neighborFlow[direction] = calculateFlowDensity(nextIntersection);
                } else {
                    neighborFlow[direction] = 0;
                }
            });

            // Trouver la direction avec le plus de véhicules en attente, ajustée par la densité des voisins
            let maxDirection = null;
            let maxScore = -Infinity;
            directions.forEach(direction => {
                if (waitingVehicles[direction] !== undefined) {
                    const score = waitingVehicles[direction] - 0.5 * neighborFlow[direction]; // Ajustement basé sur les voisins
                    if (score > maxScore) {
                        maxScore = score;
                        maxDirection = direction;
                    }
                }
            });

            // Mettre à jour les feux : vert pour la direction prioritaire, rouge pour les autres
            lights.forEach(light => {
                if (light.state === "red" && light.timer >= light.stateDurations.red * 0.8) { // 80% de la durée rouge
                    if (light.direction === maxDirection) {
                        light.state = "green";
                        light.timer = 0;
                    }
                }
            });
        });
    };

    // Fonction pour générer un véhicule
    const spawnVehicle = (p) => {
        const vehicleTypes = ["bike", "bus", "car", "rickshaw", "truck"];
        const spawnPoints = [
            { direction: "right", lane: 1, intersectionId: "a" },
            { direction: "right", lane: 1, intersectionId: "f" },
            { direction: "left", lane: 1, intersectionId: "c" },
            { direction: "left", lane: 1, intersectionId: "d" },
            { direction: "up", lane: 1, intersectionId: "d" },
            { direction: "up", lane: 1, intersectionId: "e" },
            { direction: "up", lane: 1, intersectionId: "f" },
            { direction: "down", lane: 1, intersectionId: "a" },
            { direction: "down", lane: 1, intersectionId: "b" },
            { direction: "down", lane: 1, intersectionId: "c" },
        ];

        // Filtrer les spawnPoints pour éviter de créer des véhicules trop proches
        const validSpawnPoints = spawnPoints.filter(spawn => {
            // Vérifier si aucun véhicule n'est trop proche du point de spawn
            return !simulationState.current.vehicles.some(vehicle => {
                if (vehicle.intersectionId !== spawn.intersectionId || vehicle.direction !== spawn.direction) {
                    return false;
                }

                // Vérifier si le véhicule est proche du point de spawn
                const spawnPos = vehicle.lanePositions[spawn.intersectionId][spawn.direction][0];
                const distance = Math.sqrt((vehicle.x - spawnPos[0]) ** 2 + (vehicle.y - spawnPos[1]) ** 2);
                return distance < 50; // Distance minimale entre véhicules au spawn
            });
        });

        // Filtrer pour exclure les intersections désactivées
        const activeSpawnPoints = validSpawnPoints.filter(spawn => {
            const lights = simulationState.current.trafficLights.filter(light =>
                light.intersection === spawn.intersectionId
            );
            return lights.some(light => light.isActive);
        });

        if (activeSpawnPoints.length === 0) return; // Ne rien faire si aucune intersection n'est active

        const spawn = activeSpawnPoints[Math.floor(Math.random() * activeSpawnPoints.length)];
        const vehicleType = vehicleTypes[Math.floor(Math.random() * vehicleTypes.length)];
        const vehicle = new Vehicle(spawn.lane, vehicleType, spawn.direction, spawn.intersectionId, p);
        simulationState.current.vehicles.push(vehicle);
    };

    // Sketch p5.js
    useEffect(() => {
        const sketch = (p) => {
            let backgroundImg, redSignal, yellowSignal, greenSignal;

            p.preload = () => {
                backgroundImg = p.loadImage('/images/bgNew.png');
                redSignal = p.loadImage('/images/signals/red.png');
                yellowSignal = p.loadImage('/images/signals/yellow.png');
                greenSignal = p.loadImage('/images/signals/green.png');
            };

            p.setup = () => {
                p.createCanvas(WIDTH, HEIGHT);
                p.frameRate(FPS);
                initializeTrafficLights();
            };

            p.draw = () => {
                p.image(backgroundImg, 0, 0, WIDTH, HEIGHT);

                // Ajuster les feux en fonction de la densité
                adjustTrafficLights();

                // Mettre à jour et dessiner les feux tricolores
                simulationState.current.trafficLights.forEach(light => {
                    light.update();
                    if (light.isActive) {
                        let signalImg;
                        if (light.state === "red") signalImg = redSignal;
                        else if (light.state === "yellow") signalImg = yellowSignal;
                        else if (light.state === "green") signalImg = greenSignal;
                        p.push();
                        p.translate(light.position[0], light.position[1]);
                        p.rotate(p.radians(light.rotation));
                        p.image(signalImg, -10, -20, 20, 40);
                        p.pop();
                    }
                });

                // Mettre à jour et dessiner les véhicules
                simulationState.current.vehicles.forEach(vehicle => {
                    vehicle.update();
                    p.image(vehicle.image, vehicle.x, vehicle.y);
                });

                // Supprimer les véhicules hors de l'écran
                simulationState.current.vehicles = simulationState.current.vehicles.filter(
                    vehicle => vehicle.x >= 0 && vehicle.x <= WIDTH && vehicle.y >= 0 && vehicle.y <= HEIGHT
                );

                // Générer de nouveaux véhicules en fonction de la densité
                const vehiclesPerFrame = simulationState.current.vehiclesToSpawnPerFrame;
                const numVehiclesToSpawn = Math.floor(vehiclesPerFrame);
                const remainder = vehiclesPerFrame - numVehiclesToSpawn;
                simulationState.current.vehicleSpawnTimer += remainder;

                for (let i = 0; i < numVehiclesToSpawn; i++) {
                    spawnVehicle(p);
                }
                if (simulationState.current.vehicleSpawnTimer >= 1) {
                    spawnVehicle(p);
                    simulationState.current.vehicleSpawnTimer -= 1;
                }
            };
        };

        const p5Instance = new p5(sketch, sketchRef.current);
        return () => p5Instance.remove();
    }, []);

    // Mettre à jour le nombre de véhicules à générer par frame en fonction de la densité
    useEffect(() => {
        // trafficDensity est le nombre de véhicules par seconde
        // On calcule le nombre de véhicules par frame (à 60 FPS)
        simulationState.current.vehiclesToSpawnPerFrame = trafficDensity / FPS;
    }, [trafficDensity]);

    // Fonctions pour interagir avec la simulation
    const toggleIntersection = (intersectionId, enable) => {
        simulationState.current.trafficLights.forEach(light => {
            if (light.intersection === intersectionId) {
                light.isActive = enable;
            }
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
            <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                <div ref={sketchRef} className="mx-auto"></div>
            </div>

            {/* <div className="w-full max-w-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Controls</h2>
                <div className="grid grid-cols-2 gap-4">
                    {['a', 'b', 'c', 'd', 'e', 'f'].map(intersection => (
                        <div key={intersection} className="flex flex-col items-center space-y-2">
                            <h3 className="text-lg font-medium text-gray-600">Intersection {intersection.toUpperCase()}</h3>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => toggleIntersection(intersection, false)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                                >
                                    Disable
                                </button>
                                <button
                                    onClick={() => toggleIntersection(intersection, true)}
                                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                                >
                                    Enable
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-600 mb-2">Traffic Density (vehicles per second)</h3>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        step="0.1"
                        value={trafficDensity}
                        onChange={(e) => setTrafficDensity(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>0</span>
                        <span>{trafficDensity.toFixed(1)}</span>
                        <span>10</span>
                    </div>
                </div>
            </div> */}

            <div className="w-full max-w-lg bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-medium text-gray-800 mb-6">Panneau de contrôle</h2>

                <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-700 mb-3">Intersections</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {['a', 'b', 'c', 'd', 'e', 'f'].map(intersection => (
                            <div key={intersection} className="bg-gray-50 p-3 rounded-lg">
                                <h4 className="text-md font-medium text-gray-700 mb-2">Intersection {intersection.toUpperCase()}</h4>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => toggleIntersection(intersection, false)}
                                        className="flex-1 bg-white text-gray-700 px-3 py-1.5 rounded-md border border-gray-200 hover:bg-gray-100 transition-colors text-sm"
                                    >
                                        Désactiver
                                    </button>
                                    <button
                                        onClick={() => toggleIntersection(intersection, true)}
                                        className="flex-1 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-md border border-blue-200 hover:bg-blue-100 transition-colors text-sm"
                                    >
                                        Activer
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-700 mb-3">Densité du trafic</h3>
                    <p className="text-sm text-gray-500 mb-2">Véhicules par seconde: <span className="font-medium text-gray-700">{trafficDensity.toFixed(1)}</span></p>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        step="0.1"
                        value={trafficDensity}
                        onChange={(e) => setTrafficDensity(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0</span>
                        <span>5</span>
                        <span>10</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrafficSimulation;