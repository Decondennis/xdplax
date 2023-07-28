<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">

<title>Edit Profit</title>

<!-- Custom fonts for this template-->
<link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
<link
href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
rel="stylesheet">

<!-- Custom styles for this template-->
<link href="assets/css/sb-admin-2.min.css" rel="stylesheet">


<script src="https://checkout.flutterwave.com/v3.js"></script>

</head>

<body class="bg-gradient-primary">

<div class="container">

<!-- Outer Row -->
<div class="row justify-content-center">

<div class="col-xl-10 col-lg-12 col-md-9">

<div class="card o-hidden border-0 shadow-lg my-5">

    <div class="card-body p-0">

<!-- Nested Row within Card Body -->
<div class="row">

<div class="col-lg-6 d-none d-lg-block bg-login-image"></div>

<div class="col-lg-6">

        <div class="p-5">
            <div class="text-center">
            <h1 class="h4 text-gray-900 mb-4">Edit Profit/Commission</h1>
        </div>

        <!-- Validation Errors -->
        <x-auth-validation-errors class="mb-4" :errors="$errors" />

        <form id="bform" class="user"  action="prepay" method="POST" role="form text-left">
            
            @csrf

            <div class="form-group">
                <label>Profit</label>
                <input type="email" value="{{ $profit->m_profit }}" class="form-control" onkeyup="setPercentage(this.value)" name="profit"  />
            </div>

            <div class="form-group">
                <label>Commission</label>
                <input type="text" readonly value="0.00" class="form-control" id="txtCom" name="commission"  />
            </div>

               <div class="modal-footer">

                <button type="submit" class="btn btn-primary btn-user btn-block">
                    Save
                </button>
            </div>
        </form>
    </div>
</div>
</div>
</div>
</div>
    
</div>

</div>

</div>

<!-- Bootstrap core JavaScript-->
<script src="assets/vendor/jquery/jquery.min.js"></script>
<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>


<!-- Core plugin JavaScript-->
<script src="assets/vendor/jquery-easing/jquery.easing.min.js"></script>

<!-- Custom scripts for all pages-->
<script src="js/sb-admin-2.min.js"></script>

<script>

function setPercentage(value){

    if(isNaN(value))
        return;

    $('#txtCom').val( (value/100) * 20 );
}
</script>

</body>

</html>





