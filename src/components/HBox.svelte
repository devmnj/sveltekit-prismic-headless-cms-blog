<script>
  /**
	 * @type {any}
	 */
   export let category;
  /**
	 * @type {any}
	 */
   export let description;
  /**
	 * @type {any}
	 */
   export let slug;

</script>

<div id="body">
	<div class="box">
		<div class="content">
			<p>{category}</p>
		</div>
		<div class="content-hover">
			<a href={`/topics/${slug}`}>
				<h1>{category}</h1>
				<p>{@html description}</p>
			</a>
		</div>
	</div>
</div>

<style>
 @import url("https://fonts.googleapis.com/css?family=Patua+One");
#body {
  text-align: center;
}
#body .container {
  padding-top: 1%;
  padding-bottom: 4%;
}
#body h1 {
  margin-top: 4%;
  margin-bottom: 4%;
  font-family: "Patua One", cursive;
}
#body .box2 {
  max-height: 350px;
  height: 150px;
  background-color: #63D8B5;
  background-size: cover;
  background-position: center center;
  transition: all 0.5s ease-in-out;
  display: flex;
  align-content: center;
  justify-content: center;
}
#body .box2 .hover {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  display: flex;
  justify-content: center;
  flex-flow: column;
  transition: all 0.5s ease-in-out;
  padding: 2em 2em;
}
#body .box2 .hover h1 {
  color: #ffffff;
  font-size: 1.8em;
  text-transform: uppercase;
  font-family: "Patua One", cursive;
}
#body .box2 .hover p {
  color: #ffffff;
}
#body .box2:hover {
  filter: grayscale(100%);
}
#body .box2:hover .hover {
  opacity: 1;
  cursor: pointer;
}
#body .box {
  position: relative;
  max-height: 255px;
  height: 100px;
  background-color: #d46060;
  display: flex;
  align-content: center;
  justify-content: center;
  overflow: hidden;
}
#body .box .content-hover2 {
  transform: scale(0, 0);
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #47C299;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  flex-flow: column;
  padding: 2em 2em;
}
#body .box .content-hover2 h1 {
  color: #ffffff;
  font-size: 1.5em;
  text-transform: uppercase;
  font-family: "Patua One", cursive;
  font-style: italic;
}
#body .box .content-hover2 p {
  color: #ffffff;
}
#body .box .content-hover {
  transform: scale(0, 0);
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #252525;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  flex-flow: column;
  padding: 2em 2em;
}
#body .box .content-hover h1 { 
  color: #ffffff;
  font-size: 1.5em;
  text-transform: uppercase;
  font-family: "Patua One", cursive;
  font-style: italic;
}
#body .box .content-hover p {
  color: #ffffff;
}
#body .box .content {
  display: flex;
  justify-content: center;
  flex-flow: column;
}
#body .box .content img {
  width: 160px;
}
#body .box .content p {
  font-size: 1.2em;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: -2em;
}
#body .box:hover > .content-hover,
#body .box:hover > .content-hover2 {
  transform: scale(1, 1);
  cursor: pointer;
}
	 
</style>
