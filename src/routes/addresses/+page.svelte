<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="content">
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
							<h2 class="font-weight-normal text-7 mb-0">Address  <strong class="font-weight-extra-bold">
								Overview</strong></h2>
						</div>
						<div class="overflow-hidden mb-4 pb-3">
							<p class="mb-0">See addresses below</p>
						</div>
						<table class="table">
							<thead>
							<tr>
								<th>
									#
								</th>
								<th>
									Address
								</th>
								<th>
									Company
								</th>
								<th>
									Valid
								</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td>
									1
								</td>
								<td>
									Wibautstraat 2
								</td>
								<td>
									<select class="form-select form-control h-auto py-2" name="country" required>

										<option value="nl">Company 1</option>
										<option value="nl">Company 2</option>
									</select>
								</td>
								<td>
									✔️
								</td>
							</tr>
							<tr>
								<td>
									2
								</td>
								<td>
									Stadionweg 13
								</td>
								<td>
									<select class="form-select form-control h-auto py-2" name="country" required>
										<option value="nl">Company 1</option>
										<option value="nl">Company 2</option>

									</select>
								</td>
								<td>
									✔️
								</td>
							</tr>
							<tr>
								<td>
									3
								</td>
								<td>
									Van Woustraat 23
								</td>
								<td>
									<select class="form-select form-control h-auto py-2" name="country" required>

										<option value="nl">Company 1</option>
										<option value="nl">Company 2</option>
									</select>
								</td>
								<td>
									✔️
								</td>
							</tr>
							</tbody>
						</table>
						<div class="form-group row">
							<div class="form-group col-lg-9">

							</div>
							<div class="form-group col-lg-3">
								<input type="submit" value="Save" class="btn btn-primary btn-modern float-end"
									   data-loading-text="Loading...">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<br><br><br><br><br><br>
	</div>
</div>

<style>

</style>
