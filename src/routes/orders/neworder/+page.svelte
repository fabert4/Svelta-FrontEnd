<script>
	import '../../theme-elements.css';
	import '../../default.css';
	import '../../theme.css';
	import '../../theme-blog.css';
	import '../../theme-shop.css';
	import '../../bootstrap.min.css';
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
							<h2 class="font-weight-normal text-7 mb-0">Order Entry  <strong class="font-weight-extra-bold">
								System</strong></h2>
						</div>
						<div class="overflow-hidden mb-4 pb-3">
							<p class="mb-0">Enter order details below</p>
						</div>

						<form role="form" class="needs-validation">

							<div class="row">
								<p><strong>Goods</strong></p>
								<div class="form-group row">
									<label class="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2 required" >Type
										of goods</label>
									<div class="col-lg-9">
										<input class="form-control text-3 h-auto py-2" type="text" name="company"
											   placeholder="E.g. Plants, Food" value="" required>
									</div>
								</div>
								<div class="form-group row">
									<label class="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2">Description
										of goods</label>
									<div class="col-lg-9">
										<input class="form-control text-3 h-auto py-2" type="text" name="company"
											   placeholder="E.g. Flowers, Beer, Cigarettes" value="">
									</div>
								</div>
								<div class="form-group row">
									<label class="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2">Amount
										of goods</label>
									<div class="col-lg-9">
										<input class="form-control text-3 h-auto py-2" type="text" name="company"
											   placeholder="E.g. 10 Pallets" value="">
									</div>
								</div>
								<div class="form-group row">
									<label class="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2">Volume
										of goods</label>
									<div class="col-lg-9">
										<input class="form-control text-3 h-auto py-2" type="text" name="company"
											   placeholder="E.g. 500 KG's" value="">
									</div>
								</div>
								<div class="form-group row">
									<label class="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2">Packaging
										of goods</label>
									<div class="col-lg-9">
										<input class="form-control text-3 h-auto py-2" type="text" name="company"
											   placeholder="E.g. Plastics/Wood" value="">
									</div>
								</div>
								<div class="form-group row">
									<label class="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2">HS
										Code</label>
									<div class="col-lg-9">
										<input class="form-control text-3 h-auto py-2" type="text" name="company"
											   placeholder="E.g. 8501.10" value="">
									</div>
								</div>
								<br><br><br>
								<p><strong>Consignors</strong></p>
								<div class="form-group col">
									<label class="form-label">Pick-Up Company <span
											class="text-color-danger">*</span></label>
									<div class="custom-select-1">
										<select class="form-select form-control h-auto py-2" name="Company" required>
											<option value="" selected></option>
											<option value="nl">Company 1</option>
											<option value="be">Company 2</option>
											<option value="fra">Company 3</option>
										</select>
									</div>
								</div>
							</div>
							<div class="form-group row">
								<label class="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2 required">Pick-Up
									Date</label>
								<div class="col-lg-9">
									<input class="form-control text-3 h-auto py-2" type="datetime-local" name="email"
										   value="01-01-01" required>
								</div>
							</div>
							<div class="row">
								<div class="form-group row">
									<label class="form-label">Delivery Company <span
											class="text-color-danger">*</span></label>
									<div class="custom-select-1">
										<select class="form-select form-control h-auto py-2" name="Company" required>
											<option value="" selected></option>
											<option value="nl">Company 1</option>
											<option value="be">Company 2</option>
											<option value="fra">Company 3</option>
										</select>
									</div>
								</div>
							</div>
							<div class="form-group row">
								<label class="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2 required">Delivery
									Date</label>
								<div class="col-lg-9">
									<input class="form-control text-3 h-auto py-2" type="datetime-local" name="email"
										   value="01-01-01" required>
								</div>
							</div>

							<div class="form-group row">
								<div class="form-group col-lg-9">

								</div>
								<div class="form-group col-lg-3">
									<input type="submit" value="Save" class="btn btn-primary btn-modern float-end"
										   data-loading-text="Loading...">
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>

</style>
