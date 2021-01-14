require "test_helper"

class StepperControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get stepper_index_url
    assert_response :success
  end

  test "should get one" do
    get stepper_one_url
    assert_response :success
  end

  test "should get two" do
    get stepper_two_url
    assert_response :success
  end

  test "should get three" do
    get stepper_three_url
    assert_response :success
  end
end
