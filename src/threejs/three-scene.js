import React,{Component} from 'react'
import * as THREE from "three"
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
class ThreeScene extends Component {
    componentDidMount(){
        //scene
        this.scene=new THREE.Scene()
        // this.scene.background = new THREE.Color( 0xff0000 );
        //renderer
        this.renderer=new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth,window.innerHeight);


        this.mount.appendChild(this.renderer.domElement)

        //camera
        this.camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
        this.camera.position.z=5;


        //creating box
        var geometry=new THREE.BoxGeometry(1,1,1)
        var material=new THREE.MeshBasicMaterial({
           color: 0xFF0000,
           wireframe: true
        });
        this.cube=new THREE.Mesh(geometry,material)


        //add to scene 
       
        this.animation();
        this.renderer.render(this.scene,this.camera)   
    //orbitControls
    new OrbitControls(this.camera,this.renderer.domElement)


//event handelers
window.addEventListener("resize",this.handleWindowResize);
this.scene.add(this.cube) // bu?
    }


    animation=()=>{
        requestAnimationFrame(this.animation)
        this.cube.rotation.x+=0.01;
        this.cube.rotation.y+=0.01;
        this.renderer.render(this.scene,this.camera)

    }


    handleWindowResize=()=>{
this.camera.aspect=window.innerWidth/window.innerHeight;
this.camera.updateProjectionMatrix();

this.renderer.setSize(window.innerWidth,window.innerHeight);


    }  
    render() {
  return(
    <div
    ref={mount=>{
            this.mount=mount;
        }}
        />
  )
  
}
  
}
export default ThreeScene