# Carer API - Technical Testing Task

## Scenario
There is an API which returns based on a date whether it is a working day for the carer or not.   
For Example: The Carer works Monday to Friday. So a date which falls on a Saturday would return that it is not a working day.

## Task 1
We are going to push this API to production for the first time. In order to ensure we have delivered quality, reliable and stable software what approach should we take?
1. Add a TEST-PLAN.md explaining your test approach for this task, including different levels & types of test

## Task 2
Using [TestServer](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.testhost.testserver) complete the tasks below. Microsoft docs explaining the [setup](https://docs.microsoft.com/en-us/aspnet/core/test/integration-tests?view=aspnetcore-5.0#aspnet-core-integration-tests)
1. Fix the failing test
1. Add a test for a negative scenario
1. Refactor anything you would improve

## Tips
1. Make sure to comment and add details of your thought process and any assumptions you have made
1. Don't spend too long on it (2 hours max)

## Setup

Resource used to create project [Microsoft Docs](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-5.0&tabs=visual-studio-code)   
dotnet version (`5.0.202`)

1. `dotnet restore`
1. `cd CarerApi`
1. `dotnet dev-certs https --trust`
1. `cd ..`
1. `dotnet test`

## On Completion
- Fork the repo and send the link to hiring manager   
or
- Clone then zip it up and email to hiring manager
