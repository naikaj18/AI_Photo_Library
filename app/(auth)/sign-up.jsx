import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from "../../constants"
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'
import { createUser } from '../../lib/appwrite'

const SignUp = () => {
const[form,setForm] = useState({email:'',password:'', username:''})

const [isSubmitting,setIsSubmitting] = useState(false)

const submit = () => {
  createUser();
}

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image source={images.logo}
          resizeMode='contain'
          className="w-[115px] h-[35px]"/>
          <Text className="text-white text-2xl font-psemibold mt-10">Sign up to Aora</Text>
        
            {/* For Username */}
            <FormField
              title ="Username"
              value={form.username}
              handleChangeText={(e)=>setForm({...form,username: e})}
              otherStyles="mt-10"
              />
            {/* For email */}
            <FormField
              title ="Email"
              value={form.email}
              handleChangeText={(e)=>setForm({...form,email: e})}
              otherStyles="mt-7"
              keyboardType="email-address"/>
            {/* For password */}
            <FormField
              title ="Password"
              value={form.password}
              handleChangeText={(e)=>setForm({...form,password: e})}
              otherStyles="mt-7"
              keyboardType="Password"/>
            <CustomButton
            title="Sign Up"
            containerStyles="mt-8"
            handlePress={submit}
            isLoading = {isSubmitting}
            />
        <View className="justify-center pt-5 flex-row gap-2">
          <Text className="text-gray-100 font-pregular text-lg">Have an account already?</Text>
          <Link href="/sign-in" className="text-lg text-gray-100 font-psemibold text-secondary-100">Sign In</Link>
        </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default SignUp