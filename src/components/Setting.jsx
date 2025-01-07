import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';  // Assuming AuthContext is in your project
import { getAuth, updateProfile, updateEmail, updatePassword, deleteUser } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Setting() {
  const { user } = useContext(AuthContext);
  const [userSettings, setUserSettings] = useState({
    username: user?.displayName || '',
    email: user?.email || '',
    notifications: true,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const navigate = useNavigate();
  
  // Update the user settings state when the user info is loaded
  useEffect(() => {
    if (user) {
      setUserSettings({
        username: user.displayName || '',
        email: user.email || '',
        notifications: user.notifications || true,
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const handleNotificationToggle = () => {
    setUserSettings((prevSettings) => ({
      ...prevSettings,
      notifications: !prevSettings.notifications,
    }));
  };

  const handleSaveChanges = async () => {
    setLoading(true);
    try {
      const auth = getAuth();

      // Update the user's email if it changed
      if (user.email !== userSettings.email) {
        await updateEmail(auth.currentUser, userSettings.email);
      }

      // Update the user's display name if it changed
      if (user.displayName !== userSettings.username) {
        await updateProfile(auth.currentUser, {
          displayName: userSettings.username,
        });
      }

      alert('Settings updated successfully!');
    } catch (error) {
      console.error('Error updating settings:', error);
      setError('An error occurred while updating your settings.');
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async () => {
    if (newPassword.length < 6) {
      alert('Password should be at least 6 characters long.');
      return;
    }

    const auth = getAuth();
    setLoading(true);

    try {
      await updatePassword(auth.currentUser, newPassword);
      alert('Password updated successfully!');
      setShowPasswordModal(false);
      setNewPassword('');
    } catch (error) {
      console.error('Error changing password:', error);
      setError('An error occurred while changing your password.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    const auth = getAuth();
    setLoading(true);
    
    try {
      await deleteUser(auth.currentUser);
      alert('Account deleted successfully.');
      navigate('/login');
    } catch (error) {
      console.error('Error deleting account:', error);
      setError('An error occurred while deleting your account.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 mt-20 shadow-xl">
      <h1 className="text-2xl font-semibold mb-6">Account Settings</h1>

      {/* Profile Settings */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userSettings.username}
            onChange={handleInputChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userSettings.email}
            onChange={handleInputChange}
            className="input input-bordered w-full"
          />
        </div>
      </section>

      {/* Notification Settings */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
        <div className="flex items-center mb-4">
          <label className="mr-2">Enable Notifications</label>
          <input
            type="checkbox"
            checked={userSettings.notifications}
            onChange={handleNotificationToggle}
            className="checkbox checkbox-primary"
          />
        </div>
      </section>

      {/* Privacy Settings */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Privacy Settings</h2>
        <div className="mb-4">
          <button
            onClick={() => setShowPasswordModal(true)}
            className="btn btn-outline border-0 border-b-4 border-blue-500 hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Change Password
          </button>
        </div>
        <div>
          <button
            onClick={handleDeleteAccount}
            className="btn btn-outline border-0 border-b-4 border-red-500 hover:bg-red-500 hover:text-white transition duration-300"
          >
            Delete Account
          </button>
        </div>
      </section>

      {/* Save Changes */}
      <div className="mt-6 text-center">
        <button
          onClick={handleSaveChanges}
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </div>

      {/* Change Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="input input-bordered w-full mb-4"
              placeholder="Enter new password"
            />
            <div className="flex justify-between">
              <button
                onClick={() => setShowPasswordModal(false)}
                className="btn btn-outline border-0 border-b-4 border-red-500 hover:bg-red-500 hover:text-white transition duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleChangePassword}
                className="btn btn-primary border-0 border-b-4 border-blue-500 hover:bg-blue-500 hover:text-white transition duration-300"
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && <div className="text-red-500 mt-4 text-center">{error}</div>}
    </div>
  );
}

export default Setting;
