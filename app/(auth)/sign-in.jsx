import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from "../../constants"
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {
const[form,setForm] = useState({email:'',password:''})

const [isSubmitting,setIsSubmitting] = useState(false)

const submit = () => {}

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image source={images.logo}
          resizeMode='contain'
          className="w-[115px] h-[35px]"/>
          <Text className="text-white text-2xl font-psemibold mt-10">Log in to Aora</Text>
        
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
            title="Sign in"
            containerStyles="mt-8"
            handlePress={submit}
            isLoading = {isSubmitting}
            />
        <View className="justify-center pt-5 flex-row gap-2">
          <Text className="text-gray-100 font-pregular text-lg">Don't have an account?</Text>
          <Link href="/sign-up" className="text-lg text-gray-100 font-psemibold text-secondary-100">Sign Up</Link>
        </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default SignIn