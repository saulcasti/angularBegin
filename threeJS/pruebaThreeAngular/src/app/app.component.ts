import { Component, OnInit } from '@angular/core';

import * as THREE from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private renderer: any;
  private scene: any;
  private camera: any;
  private cube: any;

  ngOnInit(): void {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    
    document.body.appendChild(this.renderer.domElement)

    let geometry = new THREE.BoxGeometry(1, 1, 1);

    let material = new THREE.MeshBasicMaterial({ color: 0x00ff00});
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);
    this.camera.position.z = 5;

    this.render();
  }


  render(){
    console.log("render called");
    requestAnimationFrame(this.render.bind(this));

    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }

}
