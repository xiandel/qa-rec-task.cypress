using NUnit.Framework;
using System;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Text.Json;

namespace CarerApi.Tests
{
    [TestFixture]
    public class CarerControllerTests
    {
        private APIWebApplicationFactory _factory;
        private HttpClient _client;

        [OneTimeSetUp]
        public void Setup()
        {
            _factory = new APIWebApplicationFactory();
            _client = _factory.CreateClient();
        }

        [Test]
        public async Task GetTest()
        {
            HttpResponseMessage response;
            try
            {
                response = await _client.GetAsync("/Carer/2021-5-15T00:00:00");
                Assert.AreEqual(HttpStatusCode.OK, response.StatusCode);
            }
            catch
            {
                throw new Exception("Status Code not 200");
            }
            string jsonContent = response.Content.ReadAsStringAsync().Result;
            CarerPlanner cp = JsonSerializer.Deserialize<CarerPlanner>(jsonContent);
            Assert.AreEqual(true, cp.workingDay);
        }

        // Add a test for negative scenario

        [OneTimeTearDown]
        public void TearDown()
        {
            _client.Dispose();
            _factory.Dispose();
        }
    }
}