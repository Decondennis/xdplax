<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">

<title>Subscription-Paymemt</title>

<!-- Custom fonts for this template-->
<link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
<link
href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
rel="stylesheet">

<!-- Custom styles for this template-->
<link href="assets/css/sb-admin-2.min.css" rel="stylesheet">


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
            <h1 class="h4 text-gray-900 mb-4">Pay Subscription</h1>
        </div>
                        @if(session('message'))
                        <div class="alert alert-success">{{ session('message') }}</div>
                        @endif
        <!-- Validation Errors -->
        <x-auth-validation-errors class="mb-4" :errors="$errors" />

        <form id="bform" class="user"  action="prepay" method="POST" role="form text-left">
            
            @csrf

            <div class="form-group">
                <label>MT4/5 Account</label>
                <input type="text" readonly value="{{ $mt4_account }}" class="form-control" id="" name="mt4-account"  />
            </div>

            <div class="form-group">
                <label>E-mail</label>
                <input type="email" readonly value="{{ $user->email }}" class="form-control" id="" name="email"  />
            </div>

            <div class="form-group">
                <label>Phone No.</label>
                <input type="text" readonly value="{{ $user->phone }}" class="form-control" id="" name="pnone"  />
            </div>

            <div class="form-group">
                <label>Name</label>
                <input type="text" readonly value="{{ $user->name }}" class="form-control" name="name"  />
            </div>

            <div class="form-group">
                <label>Amount</label>
                <input type="text" readonly value="{{ $due_subscription }}" class="form-control" id="" name="amount"  />
            </div>

            <input type="hidden" name="source" value="SUB"/>

            <div class="modal-footer">

                <button type="submit" class="btn btn-primary btn-user btn-block">
                    Make Payment
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

<script src="https://checkout.flutterwave.com/v3.js"></script>


<!-- Bootstrap core JavaScript-->
<script src="assets/vendor/jquery/jquery.min.js"></script>
<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>


<!-- Core plugin JavaScript-->
<script src="assets/vendor/jquery-easing/jquery.easing.min.js"></script>

<!-- Custom scripts for all pages-->
<script src="js/sb-admin-2.min.js"></script>


<script>

    $(document).ready( () => {

        var fwPayload = $.parseJSON('<?= $payload ?>');

        if ( fwPayload.status === 'success' ) {
            
            flutterPay( fwPayload.data );
        }

    });

    function flutterPay(data) {
        
        FlutterwaveCheckout({
            public_key: data.publicKey,
            tx_ref: data.reference,
            amount: data.amount,
            currency: "NGN",
            payment_options: "card, mobilemoneyghana, ussd",
            customer: {
                email: data.userEmail,
                phone_number: data.userPhoneNo,
                name: data.userNames,
            },
            customizations: {
                title: data.projectName,
                description: data.PaymentDescription,
                logo: ''
            },
            callback: data =>{

                //varifyTransactionStatus(data);
            },
            onclose: ()=>{

                window.location = '/fxmint-member-dashboard';
            }
        });
    }



    function varifyTransactionStatus(flutterWavePayload){

        let resp = $.parseJSON(flutterWavePayload);

        if(resp.status == 'successful'){

            $.get('/vtrnx', {
                data: resp.transaction_id
            },
            payload =>{

                let verificationResp = $.parseJSON(payload);

                if(verificationResp.status == 'successful'){

                    alert('Verified Ok ...');
                }
                else{

                    alert('Transaction Verification: Payment was not successfully!');
                }   
            });
        }
        else{

            alert('Payment was not successful!');
        }
    }
    
</script>

</body>

</html>