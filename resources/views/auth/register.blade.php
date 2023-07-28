<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Register</title>

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
                                        <h1 class="h4 text-gray-900 mb-4">Register</h1>
                                    </div>

                                                <!-- Validation Errors -->
                                                <x-auth-validation-errors class="mb-4" :errors="$errors" />

                                                <form method="POST" action="{{ route('register') }}">
                                                    @csrf

                                                    <!-- Name -->
                                                    
                                                    <div>
                                                        <input class="form-control" placeholder=" Name" id="name" class="block mt-1 w-full" type="text" name="name" :value="old('name')" required autofocus />
                                                    </div>

                                                    <!-- Gender -->
                                                    <br>
                                                    <div>
                                                        <input class="form-control" placeholder=" Gender" id="gender" class="block mt-1 w-full" type="text" name="gender" :value="old('gender')" required autofocus />
                                                    </div>

                                                    <!-- Phone No. -->
                                                    <div>
                                                        <br>
                                                        <input class="form-control" placeholder=" Phone No." id="phone" class="block mt-1 w-full" type="text" name="phone" :value="old('phone')" required autofocus />
                                                    </div>

                                                    <!-- Home Address -->
                                                    <br>
                                                    <div>
                                                        <input class="form-control" placeholder=" Address" id="address" class="block mt-1 w-full" type="text" name="address" :value="old('address')" required autofocus />
                                                    </div>

                                                    <!-- Email Address -->
                                                    <div class="mt-4">

                                                        <input class="form-control" placeholder=" Email-Address" id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required />
                                                    </div>

                                                    <!-- mt4/5 Number -->
                                                    <div class="mt-4">

                                                        <input class="form-control" placeholder=" Mt4/5 Number" id="mt4number" class="block mt-1 w-full" type="text" name="mt4number" :value="old('mt4number')" required />
                                                    </div>

                                                    <!-- mt4/5 Password -->
                                                    <div class="mt-4">

                                                        <input class="form-control" placeholder=" Mt4/5 Password" id="mt4password" class="block mt-1 w-full" type="text" name="mt4password" :value="old('mt4password')" required />
                                                    </div>

                                                    <!-- mt4/5 Server -->
                                                    <div class="mt-4">

                                                        <input class="form-control" placeholder=" Mt4/5 Server" id="mt4server" class="block mt-1 w-full" type="text" name="mt4server" :value="old('mt4server')" required />
                                                    </div>

                                                    <!-- Password -->
                                                    <div class="mt-4">

                                                        <input class="form-control" placeholder=" Password" id="password" class="block mt-1 w-full"
                                                                        type="password"
                                                                        name="password"
                                                                        required autocomplete="new-password" />
                                                    </div>

                                                    <!-- Confirm Password -->
                                                    <div class="mt-4">
                                                        <input class="form-control" placeholder=" Comfirm Password" id="password_confirmation" class="block mt-1 w-full"
                                                                        type="password"
                                                                        name="password_confirmation" required />
                                                    </div>

                                                    <div class="flex items-center justify-end mt-4">
                                                        <a class="underline text-sm text-gray-600 hover:text-gray-900" href="{{ route('login') }}">
                                                            {{ __('Already registered?') }}
                                                        </a>
                                                        <br><br>
                                                        <button type="submit" class="btn btn-primary btn-user btn-block">
                                                            Register
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
                                        <script src="vendor/jquery/jquery.min.js"></script>
                                        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

                                        <!-- Core plugin JavaScript-->
                                        <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

                                        <!-- Custom scripts for all pages-->
                                        <script src="js/sb-admin-2.min.js"></script>

                                        </body>

                                        </html>