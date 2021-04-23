# Import Active Directory Module for running AD cmdlets
Import-Module activedirectory

# Store the data from AD Users excel file in $ADUsers variable
$ADUsers = Import-csv ..\

# Loop through each row containing user details in the excel file. 
foreach ($User in $ADUsers) {

    $Username = $User.Username 
    $Password = $User.Password
    $Firstname = $User.First_Name  
    $Lastname = $User.Last_Name 
    $Email = $User.email 

    # Check if the user account already exists in AD
    if (Get-ADUser -F {SamAccountName -eq $Username}) {

        # If user does exist, output a warning message
        Write-Warning "A user account $Username already exists in Active Directory."
        
    } else {

        # If a user does not exist then create a new user account.
        # Account will be created in the OU listed in the $OU variable in the excel file; don't forget to change the domain name in the"-UserPrincipalName" variable
        New-ADUser `
        -SamAccountName $Username `
        -UserPrincipalName "$Username@senglab2.ad.net" `
        -Name "$Firstname $Lastname" `
        -GivenName $Firstname `
        -Surname $Lastname `
        -EmailAddress $Email `
        -Enabled $True `
        -ChangePasswordAtLogon $True `
        -DisplayName "$Firstname $Lastname" `
        -AccountPassword (convertto-securestring $Password -AsPlainText -Force)

    }

}