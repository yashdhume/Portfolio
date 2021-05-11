<template>
  <div>
    <div id="info">
      <a href="https://threejs.org" target="_blank" rel="noopener">three.js</a> - webgl particle billboards example
    </div>

  </div>
</template>

<script>
import * as THREE from 'three'
import Stats from "three-full/sources/libs/stats.module";
import { GUI } from 'three-full/sources/libs/dat.gui.module';



export default {
  name: 'ThreeTest',
  mounted() {
    this.init();
    this.animate();
  },
  data() {
    return {

      camera: null,
      scene: null,
      renderer: null,
      stats: null,
      material: null,

      mouseX: 0,
      mouseY: 0,
     // container: null,

      windowHalfX: window.innerWidth / 2,
      windowHalfY:  window.innerHeight / 2,
    }
  },
  methods: {
    init: function () {
      this.camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 2, 2000 );
      this.camera.position.z = 1000;

      this.scene = new THREE.Scene();
      this.scene.fog = new THREE.FogExp2( 0x000000, 0.001 );

      const geometry = new THREE.BufferGeometry();
      const vertices = [];

      const sprite = new THREE.TextureLoader().load( '@/disc.png' );

      for ( let i = 0; i < 10000; i ++ ) {

        const x = 2000 * Math.random() - 1000;
        const y = 2000 * Math.random() - 1000;
        const z = 2000 * Math.random() - 1000;

        vertices.push( x, y, z );

      }

      geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

      this.material = new THREE.PointsMaterial( { size: 35, sizeAttenuation: true, map: sprite, alphaTest: 0.5, transparent: true } );
      this.material.color.setHSL( 1.0, 0.3, 0.7 );

      const particles = new THREE.Points( geometry, this.material );
      this.scene.add( particles );

      //

      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setPixelRatio( window.devicePixelRatio );
      this.renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( this.renderer.domElement );

      //

      this.stats = new Stats();
      document.body.appendChild( this.stats.dom );

      //

      const gui = new GUI();
      const a = this;
      gui.add( this.material, 'sizeAttenuation' ).onChange( function () {

        a.material.needsUpdate = true;

      } );

      gui.open();

      //

      this.document.body.style.touchAction = 'none';
      this.document.body.addEventListener( 'pointermove', this.onPointerMove );

      //

      window.addEventListener( 'resize', this.onWindowResize );

    },

  },
  onWindowResize: function () {

  this.windowHalfX = window.innerWidth / 2;
  this.windowHalfY = window.innerHeight / 2;

  this.camera.aspect = window.innerWidth / window.innerHeight;
  this.camera.updateProjectionMatrix();

  this.renderer.setSize( window.innerWidth, window.innerHeight );

},

onPointerMove: function ( event ) {

  if ( event.isPrimary === false ) return;

  this.mouseX = event.clientX - this.windowHalfX;
  this.mouseY = event.clientY - this.windowHalfY;

},

//

animate: function () {

  requestAnimationFrame( this.animate );

  this.render();
  this.stats.update();

},

// eslint-disable-next-line vue/require-render-return
render: function () {

  const time = Date.now() * 0.00005;

  this.camera.position.x += ( this.mouseX - this.camera.position.x ) * 0.05;
  this.camera.position.y += ( - this.mouseY - this.camera.position.y ) * 0.05;

  this.camera.lookAt( this.scene.position );

  const h = ( 360 * ( 1.0 + time ) % 360 ) / 360;
  this.material.color.setHSL( h, 0.5, 0.5 );

  this.renderer.render( this.scene, this.camera );

}

}
</script>

<style scoped>
#container {
  height: 100%;
}
</style>