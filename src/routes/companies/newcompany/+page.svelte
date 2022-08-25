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
							<h2 class="font-weight-normal text-7 mb-0">Company Entry  <strong class="font-weight-extra-bold">
								System</strong></h2>
						</div>
						<div class="overflow-hidden mb-4 pb-3">
							<p class="mb-0">Enter company details below</p>
						</div>

						<form role="form" class="needs-validation">
							<p><strong>Company</strong></p>
							<div class="row">
								<div class="form-group row">
									<label class="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2 required" >Company Name</label>
									<div class="col-lg-9">
										<input class="form-control text-3 h-auto py-2" type="text" name="company"
											   placeholder="E.g. 'Best Company' " value="" required>
									</div>
								</div>
								<div class="row">
									<div class="form-group col">
										<label class="form-label">Company Country/Region <span
												class="text-color-danger">*</span></label>
										<div class="custom-select-1">
											<select class="form-select form-control h-auto py-2" name="country" required>
												<option value="" selected></option>
												<option value="nl">The Netherlands</option>
												<option value="be">Belgium</option>
												<option value="fra">France</option>
												<option value="de">Germany</option>
												<option value="no">Norway</option>
												<option value="se">Sweden</option>
											</select>
										</div>
									</div>
								</div>
								<div class="form-group row">
									<label class="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2 required">Company
										Address</label>
									<div class="col-lg-9">
										<input class="form-control text-3 h-auto py-2" type="text" name="address" value=""
											   placeholder="Street" required>
									</div>
								</div>
								<div class="form-group row">
									<label class="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2 "></label>
									<div class="col-lg-6">
										<input class="form-control text-3 h-auto py-2" type="text" name="city" value=""
											   placeholder="City" required>
									</div>
									<div class="col-lg-3">
										<input class="form-control text-3 h-auto py-2" type="text" name="state" value=""
											   placeholder="Postal Code" required>
									</div>
								</div>
								<div class="form-group row">
									<label class="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2">PC</label>
									<div class="col-lg-9">
										<input class="form-control text-3 h-auto py-2" type="text" name="company"
											   placeholder="E.g. PC" value="">
									</div>
								</div>
								<div class="form-group row">
									<label class="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2">KvK Number (Optional)</label>
									<div class="col-lg-9">
										<input class="form-control text-3 h-auto py-2" type="text" name="company"
											   placeholder="E.g. 51426382" value="">
									</div>
								</div>
								<div class="form-group row">
									<label class="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2">VAT Number (Optional)</label>
									<div class="col-lg-9">
										<input class="form-control text-3 h-auto py-2" type="text" name="company"
											   placeholder="E.g. NL123456789B01" value="">
									</div>
								</div>
								<div class="form-group row">
									<label class="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2">IBAN Number</label>
									<div class="col-lg-9">
										<input class="form-control text-3 h-auto py-2" type="text" name="company"
											   placeholder="E.g. NL56 RABO 0123 3456 78" value="">
									</div>
								</div>
								<div class="form-group row">
									<label class="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2">Phone Number</label>
									<div class="col-lg-9">
										<input class="form-control text-3 h-auto py-2" type="text" name="company"
											   placeholder="E.g. +31 6 0123456789" value="">
									</div>
								</div>
								<div class="form-group row">
									<label class="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2">E-mail Address</label>
									<div class="col-lg-9">
										<input class="form-control text-3 h-auto py-2" type="text" name="company"
											   placeholder="E.g. tijn@cargoledger.nl" value="">
									</div>
								</div>
								<p><strong>Contact</strong></p>
								<div class="form-group row">
									<label class="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2">Name(s)</label>
									<div class="col-lg-9">
										<input class="form-control text-3 h-auto py-2" type="text" name="company"
											   placeholder="E.g. Hansje Fransen, Fransje Hansen" value="">
									</div>
								</div>
								<div class="form-group row">
									<label class="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2">Phone Number</label>
									<div class="col-lg-9">
										<input class="form-control text-3 h-auto py-2" type="text" name="company"
											   placeholder="E.g. +31 6 123456789" value="">
									</div>
								</div>
								<div class="form-group row">
									<label class="col-lg-3 col-form-label form-control-label line-height-9 pt-2 text-2">E-mail Address</label>
									<div class="col-lg-9">
										<input class="form-control text-3 h-auto py-2" type="text" name="company"
											   placeholder="E.g. tijn@cargoledger.nl" value="">
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
