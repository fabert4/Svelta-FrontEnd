<script>
	import './theme-elements.css';
	import './default.css';
	import './theme.css';
	import './theme-blog.css';
	import './theme-shop.css';
	import './bootstrap.min.css';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="body">
		<div role="main" class="main">
			<div id="examples" class="container py-2">

				<div class="row">
					<div class="col-lg-3 order-2 order-lg-1">

						<aside class="sidebar mt-2 mb-5">
							<h5 class="font-weight-semi-bold">Menu</h5>
							<ul class="nav nav-list flex-column">
								<li class="nav-item">
									<a class="nav-link" href="/orders">Orders</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="/addresses">Addresses
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="/companies">Consigners</a>
								</li>
<!--								<li class="nav-item">-->
<!--									<a class="nav-link" href="elements-forms.html#formsStyleWithIcons">Carrier Profile</a>-->
<!--								</li>-->

							</ul>
						</aside>

					</div>
					<div class="col-lg-9 order-1 order-lg-2">

						<div class="overflow-hidden mb-1">
							<h2 class="font-weight-normal text-7 mb-0">Welcome to the new CargoLedger FrontEnd  <strong class="font-weight-extra-bold">
								UI!</strong></h2>
						</div>
						<div class="overflow-hidden mb-4 pb-3">
							<p class="mb-0">Click any of the links to continue</p>
						</div>

						<p>- Work In Progress</p>
						<a class="nav-link" href="/login">Login Mockup (W.I.P.)</a>
						<a class="nav-link" href="/bundle">Bundle Orders(W.I.P.)</a>



					</div>
				</div>
			</div>
		</div>
	</div>
	<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</section>

<style>

</style>
